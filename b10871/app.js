const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");


const first = input[0].split(" ").map(item => +item);

const arr = input[1].split(" ").map(item => +item);

let result = "";

function solution(N, X, A) {
    for(i = 0; i < N; i++) {
        if(A[i] < X) {
            result += A[i] + " ";
        }
    }
};




solution(first[0], first[1], arr);
console.log(result);