const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input[0];
             
const testCaseArray = [];
for(i = 1; i < input.length; i++) {
    testCaseArray.push((input[i]).split(" ").map((item) => +item));
};


function solution(T) {
    for(i=0; i < T; i++){
    let testNum = testCaseArray[i];
    console.log(+testNum[0] + +testNum[1]);
    }
};


solution(input[0]);
