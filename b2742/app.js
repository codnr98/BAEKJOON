const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(item => +item);

let result = '';
function solution(N) {
    for(i = -N; i < 0; i++) {
        if(i !== -1) {
            result += -i + "\n"
        } else {
            result += -i 
        }
    }
};

solution(input[0]);
console.log(result)