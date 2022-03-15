const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const numInput = [];
for(i = 0; i < input.length; i++) {
    numInput.push(+input[i]);
}

// 시험 점수를 입력받아 90 ~ 100점은 A,
// 80 ~ 89점은 B,
// 70 ~ 79점은 C,
// 60 ~ 69점은 D,
// 나머지 점수는 F를 출력하는 프로그램을 작성하시오.


function solution(grade) {
    if(grade >= 90) {
        console.log("A");
    } else if(grade>= 80) {
        console.log("B");
    } else if(grade >= 70) {
        console.log("C");
    } else if(grade >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

solution(numInput[0]);