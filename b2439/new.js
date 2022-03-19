const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
input = +input;

let result = "";

function solution(N) {
    
};

solution(input);
console.log(result);