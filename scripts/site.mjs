// Copies the content script into the website, so the homepage demo runs the
// code the extension ships. `pnpm test` fails when the copies are out of date.
//   pnpm site
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
await mkdir(join(root, "docs/demo"), { recursive: true });
for (const file of ["unwall.js", "unwall.css"]) {
  await copyFile(join(root, "src/content", file), join(root, "docs/demo", file));
}
