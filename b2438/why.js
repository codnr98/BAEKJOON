const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = +input;


let result = "";

function solution(N) {
    for(i =1; i <= N; i++) {
        for(j =0; j < i; j++) {
            result += "*";
        }
        for(j = 1 ; j <= input - i; j++) {
            if(j !== (input - i)) {
                result += " ";
            } else {
                result += " " + " \n";
            }
        }
    }
}


solution(input);
console.log(result);