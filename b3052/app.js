const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n").map(item => +item);
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

const num = [];
for(i=0; i<input.length; i++) {
    if(num.indexOf(input[i] %= 42) === -1) {
        num.push(input[i] %= 42);
    }
}

console.log(num.length);