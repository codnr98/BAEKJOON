    const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
    let input = require("fs").readFileSync(filePath).toString().split("\n");
    // let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");


    function solution() {
        const Num = [];


        for(i=0; i<input.length; i++) {
            Num.push(input[i].split(" ").map(item => +item));
        };


        for(i=0; i<Num.length; i++) {
            let testNum = Num[i];
            if(testNum[0] !== 0){
                console.log(testNum[0] + testNum[1]);
            }
        };
    };


    solution();