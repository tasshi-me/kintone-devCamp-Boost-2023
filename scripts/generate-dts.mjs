import path from "path";
import { fileURLToPath } from "url";
import { $ } from "zx";
import minimist from "minimist";
import { exec, execSync } from "child_process";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(dirname, "../");

const appId = minimist(global.process.argv.slice(2))?._?.at(1);

if (typeof appId !== "number") {
  console.error("アプリIDを指定してください");
  console.error("例: npm run generate:dts 123");
  global.process.exit(1);
}

console.log(`Generating .d.ts file for App ${appId}...`);

const destPath = path.join(projectRoot, "src", "@types", `app-${appId}.d.ts`);

// On Windows environment, $`command` syntax will try to run command on WSL.
// To avoid it, we use execSync instead.
const stdout = await execSync(
  `kintone-dts-gen --app-id ${appId} --type-name Record --namespace App${appId} -o ${destPath}`
);
console.log("" + stdout);
// await $`kintone-dts-gen --app-id ${appId} --type-name Record --namespace App${appId} -o ${destPath}`;
