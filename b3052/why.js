const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = +input;


let star = "";

for (let i = 0; i < input; i++) {
  star += "*"
  console.log(star); 
}