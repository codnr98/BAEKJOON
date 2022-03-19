const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCaseArray = [];
for(i=1; i<input.length; i++) {
    testCaseArray.push(input[i].split(" ").map(item => +item)); // testCaseArray에 push할때 띄어쓰기 간격을 기준으로 item들을 재배치하고 숫자type으로 변경
};



let result = '';

function solution(T) {
    for(i = 0; i < T; i++) {
        let testNum = testCaseArray[i];
        result += testNum[0] + testNum[1] + "\n";
    }
};

solution(+input[0])

console.log(result);