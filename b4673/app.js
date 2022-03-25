const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

const value = [];
for(i=1; i<=input[0]; i++) {
    value.push(input[i].split(" ").map(item => +item));
};


function solution(C) {
    let arr = [];
    for(i=0; i < C; i++) {
        arr = value[i];
        arr.splice(0, 1);
        let average = arr.reduce((acc, cur) => acc + cur, 0);
        average /= arr.length;
        let percent = 0;
        for(j=0; j < arr.length; j++) {
            if(arr[j] > average) {
                percent++;
            }
        }
        percent = 100 / arr.length * percent;
        console.log(percent.toFixed(3) + "%");
    }
}

solution(input[0]);


