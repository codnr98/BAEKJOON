const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const numInput = [];
for(i = 0; i < input.length; i++) {
    numInput.push(+input[i]);
}

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

function solution(A, B) {
    if(A == B) {
        console.log("==");
    } else if(A > B) {
        console.log(">");
    } else {
        console.log("<");
    }
}

solution(numInput[0], numInput[1]);