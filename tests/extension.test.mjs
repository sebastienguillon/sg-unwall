// Behaviour tests: the content script runs on the local pages in tests/fixtures/,
// in Chromium and Firefox. Each page is a test; each check is a subtest, so one
// failing check does not hide the others.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { after, before, describe, test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium, firefox } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(here, "../src");
const fixture = (name) => pathToFileURL(join(here, "fixtures", name)).href;
const demoPage = (lang) => pathToFileURL(resolve(here, "../docs/demo", `${lang}.html`)).href;

// Injected into the page world, where the extension APIs do not exist: the script
// then runs in test mode and exposes globalThis.__unwall.
const js = await readFile(join(SRC, "content/tacet.js"), "utf8");
const css = await readFile(join(SRC, "content/tacet.css"), "utf8");
const init = `globalThis.__unwallTest = true;
(() => { const add = () => { const s = document.createElement('style'); s.textContent = ${JSON.stringify(css)}; document.documentElement.appendChild(s); };
  if (document.documentElement) add();
  else new MutationObserver((_, o) => { if (document.documentElement) { o.disconnect(); add(); } }).observe(document, { childList: true }); })();
${js}`;

const hidden = (page, sel) =>
  page.evaluate((s) => {
    const el = document.querySelector(s);
    return !!el && getComputedStyle(el).display === "none";
  }, sel);
const filterOf = (page, sel) =>
  page.evaluate((s) => getComputedStyle(document.querySelector(s)).filter, sel);

for (const [engine, type] of [
  ["chromium", chromium],
  ["firefox", firefox],
]) {
  describe(engine, () => {
    let browser;
    let page;

    before(async () => {
      browser = await type.launch();
      const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 } });
      await ctx.addInitScript({ content: init });
      page = await ctx.newPage();
    });
    after(() => browser?.close());

    test("cases.html: walls, user-opened layers and cookie settings", async (t) => {
      await page.goto(fixture("cases.html"));
      await page.waitForTimeout(1500);
      const wall = await hidden(page, "#wall");
      const overflow = await page.evaluate(
        () => getComputedStyle(document.documentElement).overflowY,
      );
      const dialogOpen = await page.evaluate(() => document.getElementById("modal-dialog").open);
      const signature = await hidden(page, "#didomi-host");
      const menu = await hidden(page, "#menu");
      await t.test("consent wall at load is hidden", () => assert.ok(wall));
      await t.test("html overflow lock is lifted", () => assert.notEqual(overflow, "hidden"));
      await t.test("modal <dialog> is closed", () => assert.equal(dialogOpen, false));
      await t.test("vendor container (signature) is hidden", () => assert.ok(signature));
      await t.test("closed click-through menu is untouched", () => assert.ok(!menu));

      await page.click("#open-lb");
      await page.waitForTimeout(900);
      const lightbox = await hidden(page, "#lightbox");
      await t.test("lightbox opened by a click stays visible", () => assert.ok(!lightbox));
      await page.click("#close-lb");

      await page.waitForTimeout(2600); // the newsletter appears at 3 s
      const newsletter = await hidden(page, "#newsletter");
      await t.test("newsletter popup appearing later is hidden", () => assert.ok(newsletter));

      await page.click("#login");
      await page.waitForTimeout(1700);
      const login = await hidden(page, "#login-modal");
      await t.test("login modal opened by a click (slow network) stays visible", () =>
        assert.ok(!login),
      );
      await page.click("#close-login");

      await page.click("#cookie-settings");
      await page.waitForTimeout(300);
      const released = !(await hidden(page, "#didomi-host"));
      await t.test('clicking "Modifier mes choix cookies" brings the vendor dialog back', () =>
        assert.ok(released),
      );
    });

    test("appshell.html: a full-screen app shell is left alone", async () => {
      await page.goto(fixture("appshell.html"));
      await page.waitForTimeout(3500);
      const actions = await page.evaluate(() => globalThis.__unwall.status().actions);
      assert.deepEqual(
        actions.map((a) => a.what),
        [],
      );
    });

    test("bodyfixed.html: adblock wall with a position: fixed body", async (t) => {
      await page.goto(fixture("bodyfixed.html"));
      await page.waitForTimeout(1500);
      const state = await page.evaluate(() => ({
        position: getComputedStyle(document.body).position,
        y: Math.round(scrollY),
        veil: [...document.querySelectorAll(".veil")].every(
          (v) => getComputedStyle(v).display === "none",
        ),
      }));
      await t.test("adblock wall is hidden", () => assert.ok(state.veil));
      await t.test("body position: fixed lock is lifted", () =>
        assert.notEqual(state.position, "fixed"),
      );
      await t.test("reading position is restored", () =>
        assert.ok(Math.abs(state.y - 1200) < 5, `scrollY=${state.y}`),
      );
    });

    test("blur.html: content the site blurs while the CMP is up", async (t) => {
      await page.goto(fixture("blur.html"));
      await page.waitForTimeout(1500);
      const host = await hidden(page, "#didomi-host");
      const main = await filterOf(page, "main");
      await t.test("vendor container added after load is hidden", () => assert.ok(host));
      await t.test("blur the site adds once the CMP is up is removed", () =>
        assert.equal(main, "none"),
      );

      await page.click("#menu-btn");
      await page.waitForTimeout(1000);
      await page.evaluate(() => window.renderLate()); // new content while the menu is open
      await page.waitForTimeout(3500);
      const feed = await filterOf(page, "#feed");
      await t.test(
        "blur from a sliding menu the user opened stays (on content the CMP did not blur)",
        () => assert.match(feed, /blur/),
      );

      await page.click("#menu-close");
      await page.waitForTimeout(2500);
      const late = await filterOf(page, "#late");
      await t.test(
        "content rendered later under the CMP blur rule is repaired once the menu is closed",
        () => assert.equal(late, "none"),
      );
    });

    // The website's demo pages: the made-up wall must come off with no vendor
    // signature to help, the way the homepage shows it.
    for (const lang of ["en", "fr"]) {
      test(`docs/demo/${lang}.html: the website demo's made-up wall`, async (t) => {
        await page.goto(demoPage(lang));
        await page.waitForTimeout(1500);
        const state = await page.evaluate(() => ({
          wall: getComputedStyle(document.getElementById("ledger-consent")).display,
          overflow: getComputedStyle(document.documentElement).overflowY,
          blur: getComputedStyle(document.querySelector("main")).filter,
        }));
        await t.test("made-up consent wall is hidden", () => assert.equal(state.wall, "none"));
        await t.test("scroll lock is lifted", () => assert.notEqual(state.overflow, "hidden"));
        await t.test("article blur is removed", () => assert.equal(state.blur, "none"));
      });
    }

    // An ordinary cookie banner must not unlock or un-blur anything else. With the
    // CMP class on <body>, the content repair is armed and its own guards apply.
    for (const [variant, label] of [
      ["", "banner.html: ordinary page with a cookie banner"],
      ["?flag", "banner.html?flag: same page with a CMP class on <body>"],
    ]) {
      test(label, async (t) => {
        await page.goto(fixture("banner.html") + variant);
        await page.waitForTimeout(2500);
        const banner = await hidden(page, "#onetrust-consent-sdk");
        const notInert = await page.evaluate(() =>
          ["#drawer", "#s2", "#s3"].filter((s) => !document.querySelector(s).inert),
        );
        const hit = await page.evaluate(() => {
          const r = document.getElementById("next").getBoundingClientRect();
          return document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2)?.id;
        });
        await t.test("cookie banner (signature) is hidden", () => assert.ok(banner));
        await t.test("closed drawer and off-screen slides stay inert", () =>
          assert.deepEqual(notInert, []),
        );
        await t.test("click-through decoration layer stays click-through", () =>
          assert.equal(hit, "next"),
        );

        await page.click("#facet");
        await page.waitForTimeout(variant ? 2000 : 400); // with the CMP class, past the click grace
        const results = await page.evaluate(() => {
          const cs = getComputedStyle(document.getElementById("results"));
          return `${cs.filter} ${cs.pointerEvents}`;
        });
        await t.test("results reloading after a filter click stay blurred and frozen", () =>
          assert.equal(results, "blur(2px) none"),
        );

        await page.waitForTimeout(800);
        await page.click("#dd");
        await page.waitForTimeout(800);
        const pe = await page.evaluate(() => getComputedStyle(document.body).pointerEvents);
        await t.test("dropdown opened on pointerdown keeps <body> pointer-events: none", () =>
          assert.equal(pe, "none"),
        );
      });
    }
  });
}
