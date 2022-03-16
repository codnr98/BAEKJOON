const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const numInput = [];
for(i = 0; i < input.length; i++) {
    numInput.push(parseInt(input[i]));
}

function solution(h, m) {
    m -= 45;
    if(m < 0) {
        m += 60;
        h -= 1;
    }
    if(h < 0) {
        h += 24;
    } 
    console.log(h, m);
}

solution(numInput[0], numInput[1])


