const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const numInput = [];
for(i = 0; i < input.length; i++) {
    numInput.push(+input[i]);
}

// x, y == 1
// -x, y == 2
// -x, -y == 3
// x, -y == 4


function solution(x, y) {
    if(x > 0 && y > 0) {
        console.log(1);
    } else if(x < 0 && y > 0) {
        console.log(2);
    } else if(x < 0 && y < 0) {
        console.log(3);
    } else if(x > 0 && y < 0) {
        console.log(4);
    }
}

solution(numInput[0], numInput[1]);