const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n").map(item => +item);
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

const maxValue = Math.max(...input);
let max

 for(i = 0; max !== maxValue; i++) {
    max = input[i];
};
console.log(maxValue);
console.log(i);


