// Composes probe screenshots into one side-by-side contact sheet.
//   node scripts/sheet.mjs out/sheet.png out/a-baseline.png out/a-nosig.png out/b-baseline.png ...
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";

const [dest, ...shots] = process.argv.slice(2);
const cells = await Promise.all(
  shots.map(
    async (p) =>
      `<figure><img src="data:image/png;base64,${(await readFile(p)).toString("base64")}"><figcaption>${basename(p)}</figcaption></figure>`,
  ),
);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 600 } });
await page.setContent(`<style>body{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:6px;font:12px sans-serif}
figure{margin:0}img{width:100%;display:block;border:1px solid #999}figcaption{padding:2px 4px}</style>${cells.join("")}`);
await page.screenshot({ path: dest, fullPage: true });
await browser.close();
