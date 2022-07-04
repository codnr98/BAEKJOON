const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n"); // 줄바꿈으로 array를 나눔
input = input[0];
input = input.split(" ").map((item) => +item);
// .map()은 해당배열 안의 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

function solution(input) {
  let sum = 0;
  let = input[0] - input[1];
  console.log(let);
}

solution(input);
