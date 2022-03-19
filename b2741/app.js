const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(item => +item);

let result = '';
function solution(N) {
    for(i=1; i <= N; i++) {
        if(i !== N) {
            result += i + "\n"
        } else {
            result += i 
        }
    }
};

solution(input[0]);
console.log(result)