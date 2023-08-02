import path from "path";
import { fileURLToPath } from "url";
import { copyFile } from "fs/promises";
import { existsSync } from "fs";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(dirname, "../");

const srcPath = path.join(projectRoot, "templates", ".env.template");
const destPath = path.join(projectRoot, ".env");
if (!existsSync(destPath)) {
  console.log("initialize .env");
  await copyFile(srcPath, destPath);
} else {
  console.log(".env already exists");
}
