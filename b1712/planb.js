const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");
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
// if의 조건에 맞는 수를 찾아서 바로 삭제하는 바람에 인덱스값이 틀려서 검사에 혼선이 생김 !!!
         //        1    2    3    4    5    6    7    8    9   10   11   12   13   14   15    16   
const key = ["c", "=", "c", "-", "d", "-", "l", "j", "n", "j", "s", "=", "z", "=", "d", "z", "="];


function solution(s) {
    const deleteValue = [];
    let thirdValue = 0;
    let count = 0;
    for(i = 0; i < s.length; i++) {
        for(j = 0; j < key.length; j++) {
            if(j % 2 != 0 && j < 15 && j != 13) {
                if(s[i] == key[j] && s[i - 1] == key[j - 1]){
                    deleteValue.push(i - 1);
                    count++;
                }
            }
            if(j == 13) {
                if(s[i] == key[j] && s[i - 1] == key[j - 1] && s[i - 2] != "d"){
                    deleteValue.push(i - 1);
                    count++;
                }
            }
            if(j == 16) {
                if(s[i] == key[j] && s[i - 1] == key[j - 1] && s[i - 2] == key[j - 2]){
                    thirdValue = i - 2;
                    count++;
                }
            }
        }
    }
    deleteValue.forEach(item => s.splice(item, 2));
    if(count != 0) {
        // s.splice(thirdValue, 3);
    }
    
    console.log(deleteValue);
    console.log(s);
    console.log(s.length + count);
}

solution(input);