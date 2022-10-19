const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((x) => +x);

function solution(input) {
  let H = input[0];
  let M = input[1];
  M -= 45;
  if (M < 0) {
    M += 60;
    H === 0 ? (H = 23) : (H -= 1);
  }
  console.log(H, M);
}
solution(input);
