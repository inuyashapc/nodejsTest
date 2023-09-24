import { Command } from "commander";
const program = new Command();

program
  .version("1.0.0")
  .description("A custom command for your Node.js Express project")
  .option("-p, --port <port>", "Set the server port")
  .option("-e, --env <env>", "Set the environment")
  .parse(process.argv);

if (program.port) {
  console.log(`Server is running on port ${program.port}`);
}

if (program.env) {
  console.log(`Environment is set to ${program.env}`);
}
