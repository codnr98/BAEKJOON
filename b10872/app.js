const { METHODS } = require("http");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(item => +item);

// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');



function solution(A) {
    if(A <= 1) return 1; // A가 0이나 1이면 함수를 빠져나온다.
    return A * solution(A - 1);
}


console.log(solution(input[0]));
