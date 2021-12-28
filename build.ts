import { build } from "https://deno.land/x/dnt@0.11.0/mod.ts";

await build({
  entryPoints: ["./index.ts"],
  outDir: "./node",
  cjs: false,
  test: false,
  shims: {
    deno: true,
  },
  package: {
    // package.json properties
    name: "test",
    version: "0.0.1"
  },
});