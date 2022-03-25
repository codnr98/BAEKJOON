const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
const grade = input[1].split(" ").map(item => +item);
// 최대값을 찾아서 max로 지정하고 arr[]/max * 100해서 미리만들어둔 배열에 넣고 평균값을 구하여 출력한다.

const max = Math.max(...grade)
const indexNum = grade.indexOf(max); // array.indexOf() 괄호안에 element를 넣으면 몇번째인지 num으로 return하고 찾을 수 없으면 -1을 return한다.


const editGrade = [];
for(i=0; i<grade.length; i++) {
    editGrade.push(grade[i] = grade[i] / max * 100); 
};


const average = editGrade.reduce((acc, cur) => acc + cur, 0); // reduce((accumulator, currentValue) => accumulator + currentVavlue, initialValue)


console.log(average / editGrade.length);


