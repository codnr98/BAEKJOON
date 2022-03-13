const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const numInput = [];

for(i = 0; i < input.length; i++) {
    numInput.push(parseInt(input[i]));
}


//  첫째 줄에 (A+B)%C
//  둘째 줄에 ((A%C) + (B%C))%C
//  셋째 줄에 (A×B)%C
//  넷째 줄에 ((A%C) × (B%C))%C

function solution(A, B, C) {
    const first = (A + B) % C;
    const second = ((A%C) + (B%C))%C;
    const third = (A * B) % C;
    const fourth = ((A % C) * (B % C)) % C;
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
}

solution(numInput[0], numInput[1], numInput[2]);



