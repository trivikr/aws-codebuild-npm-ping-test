const { execSync, spawn } = require("child_process");

console.log("node version:", execSync("node -v", { encoding: "utf8" }));
console.log("npm version:", execSync("npm -v", { encoding: "utf8" }));

const npmPing = spawn("npm", ["ping"]);

npmPing.on("error", (err) => {
  console.error({ err });
});

npmPing.on("close", (code, signal) => {
  console.log({ code, signal });
});
