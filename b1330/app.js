const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((x) => +x);

function solution(input) {
  const A = input[0];
  const B = input[1];
  if (A < B) {
    console.log("<");
  }
  if (A > B) {
    console.log(">");
  }
  if (A == B) {
    console.log("==");
  }
}
solution(input);
