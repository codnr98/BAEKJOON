const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];

for(i = 1; i <= input[0]; i++) {
    testCaseArray.push(input[i].split(" ").map(item => +item));
}


function solution(T) {
    for(i = 0; i < 5; i++) { // for문의 반복횟수가 적용되는 Array의 item 갯수보다 초과하지 않도록 주의하자
        let testNum = testCaseArray[i]
        let result = testNum[0] + testNum[1];
        console.log(`Case #${i+1}: ${result}`)
    }
};

solution(input[0]);



