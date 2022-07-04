const { METHODS } = require("http");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(item => +item);

// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

solution(input[0], input[1], input[2]);


function solution(A, B, C) {
    if(B < C) {
        C -= B;
        A /= C;
        console.log(Math.floor(A) + 1);
    } else {
        console.log(-1);
    }
}