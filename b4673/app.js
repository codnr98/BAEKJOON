// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());



function solution() {
    const arr = [];
    let start = 0;
    for(j=1; j<10000; j++) {
        let x = 1;
        let sumValues = [];
        for(i = 0; i < 4; i++) {
            let y = j % (10 * x);
            let value = Math.floor(y / (1 * x));
            sumValues.push(value);
            x *= 10;
        }
        arr.push(sumValues.reduce((acc, cur) => acc + cur, j));
    }
    console.log(arr);
    for(i=1; i<10000; i++) {
        if(arr.indexOf(i) === -1) {
            console.log(i);
        }
    }
}


            solution();
