const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];

for(i = 1; i <= input[0]; i++) {
    testCaseArray.push(input[i].split(" ").map(item => +item));
}

// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

function solution(T) {
    for(i = 0; i < T; i++) { // for문의 반복횟수가 적용되는 Array의 item 갯수보다 초과하지 않도록 주의하자
        let testNum = testCaseArray[i];
        let result = testNum[0] + testNum[1];
        console.log(`Case #${i+1}: ${testNum[0]} + ${testNum[1]} = ${result}`);
        
    } 
};

solution(input[0]);

//console.log(result);

