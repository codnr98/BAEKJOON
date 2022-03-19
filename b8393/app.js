const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(item => +item);
input = input[0]


function solution(N) {
    let result = 0;
    for(i = 0; i <= N; i++) {
        result += i;
        if(i == N) {
            console.log(result);
        }
    }
};

solution(input);
