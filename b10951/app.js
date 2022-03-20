// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');




function solution() {
    i = 0;
    while(i !== input.length - 1) {
        let testNum = (input[i].split(" ").map(item => +item))
        console.log(testNum[0] + testNum[1]);
        i++;
    }
};

solution();
