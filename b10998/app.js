const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");// 줄바꿈으로 array를 나눔
input = input[0];
input = input.split(" ");

const inputs = [];// number type으로 변환된 값이 들어갈 array

for(i = 0; i < input.length; i++) { //input array의 length만큼 반복
    const result = parseInt(input[i]); //result에 parseInt로 input array의 item들을 받아와 number type으로 변환해서 넣어줌
    inputs.push(result); // 변환한 값들을 미리준비한 inputs array에 넣어줌
}

function solution(A, B) {
    console.log(A * B);
};

solution(inputs[0], inputs[1]);