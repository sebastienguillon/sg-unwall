// The homepage's two live parts: the demo, which runs the extension's own
// content script (docs/demo/tacet.js, copied from src/ by `pnpm site`) on a
// made-up page, and the register of tested pages.
"use strict";

const LANG = document.documentElement.lang.startsWith("fr") ? "fr" : "en";
const list = (parts, and) =>
  parts.length > 1 ? `${parts.slice(0, -1).join(", ")} ${and} ${parts.at(-1)}` : parts.join("");
const T = {
  en: {
    on: "On",
    off: "Off",
    idle: "Tacet is off on this page. Try scrolling the article: the wall locks it. Then switch Tacet on: it runs the extension’s own code, here, on the made-up page.",
    running: "Tacet is running on the made-up page…",
    back: "Tacet is off again. The made-up wall is back, with its scroll lock and its blur.",
    nothing: "Tacet found nothing to remove.",
    count: (n) => `${n} change${n > 1 ? "s" : ""}`,
    hide: "Hidden",
    unlock: "Unlocked",
    free: "Repaired",
    wall: "The made-up consent wall",
    scrolling: "Page scrolling",
    blur: "The blurred article",
    inert: "The disabled page",
    clicks: "Clicks on the page",
    aria: "The page, for screen readers",
    matched: "recognised by",
    at: (s) => `${s} s after Tacet started`,
    summary: (parts) => `Tacet ${list(parts, "and")}. Switch it off to put everything back.`,
    saidHide: "hid the made-up consent wall",
    saidUnlock: "unlocked scrolling",
    saidFree: "cleared the blur",
    words: {
      cookie: "cookies",
      consent: "consent",
      partners: "partners",
      "accept-all": "accept all",
      subscribe: "subscribe",
      price: "a price",
      privacy: "privacy",
      trackers: "trackers",
    },
    locks: { overflow: "overflow", "html-fixed": "fixed page", "body-fixed": "fixed page" },
    showAll: (n) => `Show all ${n} pages`,
    showFewer: "Show fewer pages",
    waiting: "Wall up",
  },
  fr: {
    on: "Activé",
    off: "Désactivé",
    idle: "Tacet est désactivé sur cette page. Essayez de faire défiler l’article : le mur le bloque. Puis activez Tacet : c’est le code de l’extension qui s’exécute, ici, sur la page inventée.",
    running: "Tacet s’exécute sur la page inventée…",
    back: "Tacet est de nouveau désactivé. Le mur inventé est revenu, avec son blocage du défilement et son flou.",
    nothing: "Tacet n’a rien trouvé à retirer.",
    count: (n) => `${n} changement${n > 1 ? "s" : ""}`,
    hide: "Masqué",
    unlock: "Débloqué",
    free: "Réparé",
    wall: "Le mur de consentement inventé",
    scrolling: "Le défilement de la page",
    blur: "L’article flouté",
    inert: "La page désactivée",
    clicks: "Les clics sur la page",
    aria: "La page, pour les lecteurs d’écran",
    matched: "reconnu grâce à",
    at: (s) => `${s.replace(".", ",")} s après le démarrage de Tacet`,
    summary: (parts) => `Tacet a ${list(parts, "et")}. Désactivez-le pour tout remettre en place.`,
    saidHide: "masqué le mur de consentement inventé",
    saidUnlock: "débloqué le défilement",
    saidFree: "retiré le flou",
    words: {
      cookie: "cookies",
      consent: "consentement",
      partners: "partenaires",
      "accept-all": "tout accepter",
      subscribe: "abonnement",
      price: "un prix",
      privacy: "vie privée",
      trackers: "traceurs",
    },
    locks: { overflow: "overflow", "html-fixed": "page figée", "body-fixed": "page figée" },
    showAll: (n) => `Afficher les ${n} pages`,
    showFewer: "Afficher moins de pages",
    waiting: "Mur en place",
  },
}[LANG];

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ------------------------------------------------------------------ demo

function setupDemo() {
  const toggle = document.querySelector(".switch");
  const frame = document.querySelector(".frame iframe");
  const status = document.getElementById("readout-status");
  const list = document.querySelector(".readout ol");
  const count = document.querySelector(".readout .count");
  const live = document.querySelector(".live-count");
  const setCount = (text) => {
    count.textContent = text;
    if (live) live.textContent = text;
  };
  if (!toggle || !frame || !status || !list) return;

  let on = false;
  let watcher = null;
  let summaryTimer = 0;
  let shown = 0;

  const setState = (value) => {
    on = value;
    toggle.setAttribute("aria-checked", String(value));
    toggle.querySelector(".state").textContent = value ? T.on : T.off;
  };

  const describe = (a) => {
    const secs = (a.t / 1000).toFixed(2);
    if (a.type === "hide") {
      const hits = /text:([^ ]+)/.exec(a.reason || "");
      const words = hits
        ? hits[1]
            .split(",")
            .map((w) => T.words[w])
            .filter(Boolean)
        : [];
      const how = words.length ? `${T.matched} ${words.join(", ")} · ` : "";
      return [T.hide, T.wall, how + T.at(secs)];
    }
    if (a.type === "unlock") {
      const tokens = (a.reason || "").split(":")[1] || "";
      const locks = [
        ...new Set(
          tokens
            .split(",")
            .map((s) => T.locks[s.trim()])
            .filter(Boolean),
        ),
      ];
      return [T.unlock, T.scrolling, (locks.length ? `${locks.join(", ")} · ` : "") + T.at(secs)];
    }
    const what = /blur/.test(a.reason)
      ? T.blur
      : /inert/.test(a.reason)
        ? T.inert
        : /aria/.test(a.reason)
          ? T.aria
          : T.clicks;
    return [T.free, what, T.at(secs)];
  };

  const render = (actions) => {
    for (const a of actions.slice(shown)) {
      const [verb, what, detail] = describe(a);
      const li = document.createElement("li");
      const b = document.createElement("b");
      b.textContent = verb;
      const small = document.createElement("small");
      small.textContent = detail;
      li.append(b, what, small);
      if (!reducedMotion) li.classList.add("fresh");
      list.append(li);
    }
    shown = actions.length;
    setCount(actions.length ? T.count(actions.length) : "");
    clearTimeout(summaryTimer);
    summaryTimer = setTimeout(() => {
      const types = new Set(actions.map((a) => a.type));
      const parts = [];
      if (types.has("hide")) parts.push(T.saidHide);
      if (types.has("unlock")) parts.push(T.saidUnlock);
      if (types.has("free")) parts.push(T.saidFree);
      status.textContent = parts.length ? T.summary(parts) : T.nothing;
    }, 700);
  };

  // In test mode the script mirrors its status into <html data-unwall-debug>.
  const watch = (doc) => {
    watcher?.disconnect();
    watcher = new MutationObserver(() => {
      const raw = doc.documentElement.getAttribute("data-unwall-debug");
      if (raw) render(JSON.parse(raw).actions);
    });
    watcher.observe(doc.documentElement, {
      attributes: true,
      attributeFilter: ["data-unwall-debug"],
    });
  };

  const turnOn = () => {
    const doc = frame.contentDocument;
    const win = frame.contentWindow;
    if (!doc?.head || !win || win.__unwallLoaded) return;
    setState(true);
    list.replaceChildren();
    shown = 0;
    setCount("");
    status.textContent = T.running;
    watch(doc);
    win.__unwallTest = true;
    const css = doc.createElement("link");
    css.rel = "stylesheet";
    css.href = "tacet.css";
    const js = doc.createElement("script");
    js.src = "tacet.js";
    doc.head.append(css, js);
  };

  // Off reloads the made-up page as the site serves it, wall and all.
  const turnOff = () => {
    watcher?.disconnect();
    clearTimeout(summaryTimer);
    setState(false);
    toggle.disabled = true;
    list.replaceChildren();
    setCount("");
    status.textContent = T.back;
    frame.contentWindow?.location.reload();
  };

  frame.addEventListener("load", () => {
    toggle.disabled = false;
  });
  toggle.addEventListener("click", () => (on ? turnOff() : turnOn()));

  toggle.hidden = false;
  toggle.disabled = frame.contentDocument?.readyState !== "complete";
  status.textContent = T.idle;
}

// -------------------------------------------------------------- register

function setupRegister() {
  const table = document.querySelector(".register");
  if (!table) return;
  const rows = [...table.tBodies[0].rows];

  const extra = rows.filter((r) => r.classList.contains("extra"));
  if (extra.length) {
    table.classList.add("collapsed");
    const more = document.createElement("button");
    more.type = "button";
    more.className = "text-button";
    more.setAttribute("aria-expanded", "false");
    more.textContent = T.showAll(rows.length);
    more.addEventListener("click", () => {
      const collapsed = table.classList.toggle("collapsed");
      more.textContent = collapsed ? T.showAll(rows.length) : T.showFewer;
      more.setAttribute("aria-expanded", String(!collapsed));
    });
    table.closest(".register-wrap").after(more);
  }

  // Each row first shows the wall, then turns to what Tacet did as it scrolls
  // into view. Only the eye sees the waiting state; the cells keep their text.
  if (reducedMotion || !("IntersectionObserver" in window)) return;
  for (const row of rows) {
    row.classList.add("waiting");
    for (const cell of row.querySelectorAll(".did, .num")) {
      const final = document.createElement("span");
      final.className = "final";
      final.append(...cell.childNodes);
      cell.append(final);
      const pending = document.createElement("span");
      pending.className = "pending";
      pending.setAttribute("aria-hidden", "true");
      pending.textContent = cell.classList.contains("did") ? T.waiting : "—";
      cell.append(pending);
    }
  }
  const io = new IntersectionObserver(
    (entries) => {
      let delay = 0;
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        const row = e.target;
        setTimeout(() => {
          row.classList.remove("waiting");
          row.classList.add("turned");
        }, delay);
        delay += 70;
      }
    },
    { threshold: 0.9 },
  );
  for (const row of rows) io.observe(row);
}

setupDemo();
setupRegister();
