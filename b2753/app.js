const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const numInput = [];
for(i = 0; i < input.length; i++) {
    numInput.push(+input[i]);
}



// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.



function solution(year) {
    if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}

solution(numInput[0]);