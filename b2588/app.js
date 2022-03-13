const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const numInput = [];

for(i = 0; i < input.length; i++) {
    numInput.push(parseInt(input[i]));
}



function solution(A, B) {
    const oneNum = B % 10;
    const tenNum = Math.floor((B % 100)/10);
    const hundredNum = Math.floor(B / 100);

    console.log(A * oneNum);
    console.log(A * tenNum);
    console.log(A * hundredNum);
    console.log(A * B);
}

solution(numInput[0], numInput[1]);



