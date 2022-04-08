const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
// č	c=
// ć	c-
// dž	dz=
// đ	d-
// lj	lj
// nj	nj
// š	s=
// ž	z=
// lj e s= nj a k
// d dz= z=
// if의 조건에 맞는 수를 찾아서 바로 삭제하는 바람에 인덱스값이 틀려서 검사에 혼선이 생김 !!!

const key = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];


function solution(s) {
    const doubleValue = [];
    for(let alphabet of key) {
        s = s.split(alphabet).join("*")
    }

    console.log(s);
}

solution(input);