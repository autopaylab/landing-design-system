import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "atoms/index": "src/atoms/index.ts",
    "molecules/index": "src/molecules/index.ts",
    "organisms/index": "src/organisms/index.ts",
    "templates/index": "src/templates/index.ts",
    "tokens/index": "src/tokens/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
});
