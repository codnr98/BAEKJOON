const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ");

const numInput = [];
for(i = 0; i < input.length; i++) {
    numInput.push(parseInt(input[i]));
}

function solution(N) {
    for(i = 1; i < 10; i++){
        console.log(`${N} * ${i} = ${N * i}`);
    }

}

solution(numInput[0])


