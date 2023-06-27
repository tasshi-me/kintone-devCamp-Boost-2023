import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      name: "MyKintoneCustomize",
      entry: resolve(__dirname, "src/main.ts"),
    },
  },
});
