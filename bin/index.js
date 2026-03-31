#!/usr/bin/env node
import inquirer from "inquirer";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  console.log("\n🌐 web-omw — Create Web Projects Instantly\n");

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "my-project",
    },
  ]);

  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Select a template:",
      choices: [
        { name: "Basic (minimal setup)", value: "basic" },
        { name: "Landing (modern layout)", value: "landing" },
      ],
    },
  ]);

  const templatePath = path.join(__dirname, "../templates", template);
  const targetPath = path.join(process.cwd(), projectName);

  try {
    if (fs.existsSync(targetPath)) {
      console.log(`\n⚠️ Folder "${projectName}" already exists.\n`);
      return;
    }

    await fs.copy(templatePath, targetPath);

    console.log(`\n✨ Project "${projectName}" created successfully!`);
    console.log(`📁 Location: ${targetPath}\n`);
    console.log("🚀 Next steps:");
    console.log(`   cd ${projectName}`);
    console.log("   open index.html in browser\n");

    exec("code .", { cwd: targetPath }, () => {});
  } catch (error) {
    console.error("\n❌ Error creating project:", error.message);
  }
}

run();