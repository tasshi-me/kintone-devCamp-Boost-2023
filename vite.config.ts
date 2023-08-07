import { defineConfig } from "vite";
import path, { resolve } from "path";
import fs from "fs";
import license from "rollup-plugin-license";

const licenseText = fs.readFileSync(path.join(__dirname, "LICENSE"), "utf-8");
const licenseTemplate = `
Bundle of <%= pkg.name %>
Generated: <%= moment().format('YYYY-MM-DD') %>
Version: <%= pkg.version %>

${licenseText}

This bundle includes the following third-party libraries:
<% _.forEach(dependencies, function (dependency) { %>
  =====
  <%= dependency.name %>@<%= dependency.version %> -- <%= dependency.license %>
  -----

  <%= dependency.licenseText %>
<% }) %>
`;

export default defineConfig({
  build: {
    lib: {
      name: "MyKintoneCustomize",
      entry: resolve(__dirname, "src/main.ts"),
      fileName: "my-kintone-customize",
    },
    rollupOptions: {
      plugins: [
        license({
          banner: {
            commentStyle: "ignored",
            content: licenseTemplate,
          },
        }),
      ],
    },
  },
});
