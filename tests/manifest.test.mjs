import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { describe, test } from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(join(root, "src/manifest.json"), "utf8"));
const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8"));

describe("manifest", () => {
  test("has the same version as package.json", () => {
    assert.equal(manifest.version, pkg.version);
  });

  test("uses a version the stores accept (YYYY.M.D, optional fourth number)", () => {
    assert.match(
      manifest.version,
      /^20\d\d\.(?:[1-9]|1[0-2])\.(?:[1-9]|[12]\d|3[01])(?:\.[1-9]\d*)?$/,
    );
  });

  test("references only files that exist", async () => {
    const files = [
      ...Object.values(manifest.icons),
      ...Object.values(manifest.action.default_icon),
      manifest.action.default_popup,
      ...manifest.content_scripts.flatMap((c) => [...(c.js ?? []), ...(c.css ?? [])]),
    ];
    for (const file of files) await access(join(root, "src", file));
  });
});
