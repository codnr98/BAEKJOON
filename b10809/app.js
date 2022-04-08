const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

function solution(S) {
    const arr = S.split("");
    let result ="";
    for(i=97; i<123; i++) {
        result += arr.indexOf(String.fromCharCode(i)) + " "; 
    }
    console.log(result);
}

solution(input[0]);
