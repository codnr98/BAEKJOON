const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split(" ");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());


function solution(n) {
    
    for(i=0; i<n.length; i++) {
        let A;
        let sum = "";
        for(j = n[i].length-1; j != -1; j--) {
            sum += n[i][j];
        }
        n[i] = sum;
    }
    if(n[0] > n[1]) {
        console.log(n[0]);
    } else {
        console.log(n[1]);
    }

}

solution(input);








