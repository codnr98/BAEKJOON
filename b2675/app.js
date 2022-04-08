const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
const arr = [];
for(i=1;i<input.length;i++) {
    arr.push(input[i]);
}



function solution(T, arr) {
    for(k=0; k<T; k++) {
        const RS = arr[k].split(" ");
        const S = RS[1].split("");
        let result ="";
        for(i=0; i<S.length; i++) {
             for(j=0; j<RS[0]; j++) {
                result += S[i];
             }
        }
        console.log(result);
    }
}


solution(input[0], arr);
