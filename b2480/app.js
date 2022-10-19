const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map((x) => +x);

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

// 배열에는 세개의 값이 있다

// A 0번을 지정해서 같은값이 있는지 검색한다

// 하나도 없을 경우    A 반복문에 다음값을 넣어 반복

// 하나만 있을 경우 2을 출력한다.

// 같은값이 있으면 남은 값이 같은지 확인한다

// 여기서 배열안의 변수들이 모두 같을경우 3을 출력한다.

function solution(input) {
  let A = input[0];
  let B = input[1];
  let C = input[2];
  let count = 0;
  for (i = 0; i <= 2; i++) {
    if (input.indexOf(input[i]) === 1) {
      console.log(1);
    } else if (input.indexOf(input[i]) === 2) {
      console.log(2);
    }
  }
}

solution(input);
