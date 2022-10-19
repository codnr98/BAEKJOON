const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  input[0] = input[0].split(" ");
  let A = +input[0][0];
  let B = +input[0][1];
  let C = +input[1];
  B += C;
  while (B >= 60) {
    if (B >= 60) {
      B -= 60;
      A === 23 ? (A = 0) : A++;
    }
  }
  console.log(A, B);
}

solution(input);
