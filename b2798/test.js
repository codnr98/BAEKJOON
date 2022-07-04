const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
testCase = input[0].split(" ").map(item => +item);
input[1] = input[1].split(" ").map(item => +item);



function solution(N, M, cardNum) {
    M = 21
    const a = cardNum.some(i => i < M);
    console.log(a)
}


solution(testCase[0],testCase[1], input[1]);