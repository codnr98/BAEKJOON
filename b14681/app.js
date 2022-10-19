const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

function solution(input) {
  const x = input[0];
  const y = input[1];
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x > 0 && y < 0) {
    console.log(4);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x < 0 && y > 0) {
    console.log(2);
  }
}

solution(input);
