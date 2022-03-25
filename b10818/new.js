const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

console.log(input);

let testNum = input[0];
console.log(testNum[0]);
console.log(testNum[1]);