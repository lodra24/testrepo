const {readFileSync, writeFileSync} = require("fs")

const firstText = readFileSync("./content/first.txt","utf8");
const secondText = readFileSync("./content/second.txt","utf8");

console.log(firstText, secondText);

writeFileSync("./content/result-sync.txt", `Here is the result ${firstText} and ${secondText}`);
