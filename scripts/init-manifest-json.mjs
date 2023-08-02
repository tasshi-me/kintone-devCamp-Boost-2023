import path from "path";
import { fileURLToPath } from "url";
import { copyFile } from "fs/promises";
import { existsSync } from "fs";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(dirname, "../");

const srcPath = path.join(
  projectRoot,
  "templates",
  "customize-manifest.template.json"
);
const destPath = path.join(projectRoot, "customize-manifest.json");
if (!existsSync(destPath)) {
  console.log("initialize customize-manifest.json");
  await copyFile(srcPath, destPath);
} else {
  console.log("customize-manifest.json already exists");
}
