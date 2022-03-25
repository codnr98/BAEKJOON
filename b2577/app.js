const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n").map(item => +item);
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());


function solution(A, B, C) {
    const sum = A * B * C;
    const arr = sum.toString().split("").map(item => +item); // split()은 number type에는 적용 안됨.

    let count = 0;
    let output = "";

    for(i = 0; i < 10; i++) {
        for(j = 0; j < arr.length; j++) {
            if(arr[j] == i) {
                count++;
                // console.log(`in ${j}`);
            }
        }
        output += count + "\n";
        count = 0;
        // console.log(`out ${i}`);
    }


    console.log(output);
    // console.log(arr);


}


solution(input[0], input[1], input[2])

