const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

function solution(N, S) {
    const arr = S.split("").map(item => +item);
    let sum = 0;
    for(i=0; i<N; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

solution(input[0], input[1]);

