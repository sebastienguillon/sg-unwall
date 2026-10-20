const api = globalThis.browser ?? globalThis.chrome;
const $ = (id) => document.getElementById(id);

async function activeTab() {
  const [tab] = await api.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function send(type) {
  const tab = await activeTab();
  if (!tab) return null;
  try {
    return await api.tabs.sendMessage(tab.id, { type });
  } catch {
    return null; // no content script on this page (browser pages, store, PDF...)
  }
}

function render(st) {
  const list = $("list");
  list.textContent = "";
  if (!st) {
    $("host").textContent = "";
    $("state").textContent = "Tacet does not run on this page.";
    for (const id of ["site", "zap", "undo"]) $(id).disabled = true;
    return;
  }
  $("host").textContent = st.host;
  const bits = [];
  if (!st.active) bits.push("Inactive on this page.");
  if (st.paused) bits.push("Cookie settings opened by you: vendor dialogs are shown.");
  if (st.locked.length) bits.push(`Scroll still locked (${st.locked.join(", ")}).`);
  const hides = st.actions.filter((a) => a.type === "hide").length;
  bits.push(hides ? `${hides} element${hides > 1 ? "s" : ""} hidden.` : "Nothing hidden.");
  $("state").textContent = bits.join(" ");
  for (const a of st.actions) {
    const li = document.createElement("li");
    const kind = document.createElement("span");
    kind.className = "kind";
    kind.textContent = a.kind;
    const what = document.createElement("code");
    what.textContent = a.what;
    const why = document.createElement("small");
    why.textContent = `${a.reason} · ${(a.t / 1000).toFixed(1)}s${a.text ? " · “" + a.text + "”" : ""}`;
    li.append(kind, what, why);
    list.append(li);
  }
}

async function init() {
  const st = await send("unwall:status");
  const {
    disabledHosts = {},
    debug = false,
    banners = true,
  } = await api.storage.local.get(["disabledHosts", "debug", "banners"]);
  $("site").checked = st ? !disabledHosts[st.host] : false;
  $("debug").checked = debug;
  $("banners").checked = banners;
  render(st);

  $("site").addEventListener("change", async () => {
    const cur = (await api.storage.local.get("disabledHosts")).disabledHosts || {};
    if ($("site").checked) delete cur[st.host];
    else cur[st.host] = true;
    await api.storage.local.set({ disabledHosts: cur });
    setTimeout(async () => render(await send("unwall:status")), 150);
  });
  $("debug").addEventListener("change", () => api.storage.local.set({ debug: $("debug").checked }));
  $("banners").addEventListener("change", () =>
    api.storage.local.set({ banners: $("banners").checked }),
  );
  $("zap").addEventListener("click", async () => render(await send("unwall:zap")));
  $("undo").addEventListener("click", async () => render(await send("unwall:undo")));
}

init();
