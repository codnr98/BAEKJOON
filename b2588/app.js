const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

function solution(input) {
  const A = input[0];
  const B = input[1].toString();
  const decomposeB = B.split("").map((x) => +x);
  console.log(A * decomposeB[2]);
  console.log(A * decomposeB[1]);
  console.log(A * decomposeB[0]);
  console.log(A * B);
}
solution(input);
