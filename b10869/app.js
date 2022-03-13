const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const inputs = [];

for(i = 0; i < input.length; i++) {
    const result = parseInt(input[i]);
    inputs.push(result);
};

function solution(A, B) {
    console.log(A + B);
    console.log(A - B);
    console.log(A * B);
    console.log(Math.floor(A / B));
    console.log(A % B);
};

solution(inputs[0], inputs[1]);
