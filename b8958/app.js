const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
const value = [];
for(i=1; i<= input[0]; i++) {
    value.push(input[i].split(""));
};


function solution(T) {
    for(i = 0; i < T; i++) {
        const result = [];
        const mk = value[i]
        for(j = 0; j < mk.length; j++) {
            if(mk[j] === "O") {
                if(j === 0){
                    result.push(1);
                } else {
                    result.push(result[j-1]+1);
                }
            } else {
                result.push(0);
            }
        }
        let sum = result.reduce((acc, cur) => acc + cur, 0);
        console.log(sum);
    }
}

solution(+input[0]);

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
