const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

function solution(s) {
    let num =[];
    let count = 65;
    for(i = 2; i < 10; i++) {
        let value = 3;
        if(i === 7 || i === 9) {
            value = 4;
        }
        for(j = 0; j < value; j++) {
            for(k = 0; k < s.length; k++) {
                if(s[k] == String.fromCharCode(count)) {
                    num.push(i);
                }
            }
            count++;
        }

    }
    num = num.reduce((acc, cur) => acc + cur, num.length);
    console.log(num);
}

solution(input);