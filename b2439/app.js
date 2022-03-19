const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString();
input = +input;
let result = "";

function solution(N) {
    for(i = 1; i <= N; i++) {
        for(j = 0 ; j < input - i; j++) {
            result += " ";
        }
        for(j = 1 ; j <= i; j++) {
            if(j !== i || j == input) {
                result += "*";
            } else {
                result += "*" + " \n";
            }   
        }
        
    }
};

solution(input);
console.log(result);