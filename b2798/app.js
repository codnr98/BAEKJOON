const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
testCase = input[0].split(" ").map(item => +item);
input[1] = input[1].split(" ").map(item => +item);
// 5 6 7 8 9


function solution(N, M, cardNum) {
    let result =0;
    for(i = 0; i < N; i++) {
        for(j = i + 1; j < N; j++) {
            for(k = j + 1; k < N; k++) {
                let sum = cardNum[i] + cardNum[j] + cardNum[k];
                let gap = M - sum;
                if(gap >= 0 && sum >result)
            }
        }
    }
}   


solution(testCase[0],testCase[1], input[1]);
