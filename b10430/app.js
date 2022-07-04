const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((x) => +x);

//  첫째 줄에 (A+B)%C
//  둘째 줄에 ((A%C) + (B%C))%C
//  셋째 줄에 (A×B)%C
//  넷째 줄에 ((A%C) × (B%C))%C

function solution(input) {
  const A = input[0];
  const B = input[1];
  const C = input[2];
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}
solution(input);
