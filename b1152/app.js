const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
// 단어들이 들어왔을때 아무것도 없는 단어는 filter을 사용해서 지우고 단어들이 들어있는 배열의 길이를 출력한다.

function solution(s) {
    console.log(s.length);
}

solution(input);