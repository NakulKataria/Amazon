const readlinesync = require("readline-sync");
const n = readlinesync.questionInt("Enter number of rows: ");
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += String.fromCharCode(64 + i) + " ";
    }
    console.log(pattern);
}