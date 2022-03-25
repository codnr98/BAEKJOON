const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

const testNum = input[1].split(" ").map(item => +item);

const maxValue = Math.max(...testNum);
const minValue = Math.min(...testNum);

console.log(minValue, maxValue);
