// The website's demo must run the code the extension ships.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { describe, test } from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("website", () => {
  for (const file of ["unwall.js", "unwall.css"]) {
    test(`docs/demo/${file} is the shipped src/content/${file} (run \`pnpm site\` after changing it)`, async () => {
      const shipped = await readFile(join(root, "src/content", file), "utf8");
      const copy = await readFile(join(root, "docs/demo", file), "utf8");
      assert.ok(copy === shipped, `docs/demo/${file} is out of date`);
    });
  }
});
