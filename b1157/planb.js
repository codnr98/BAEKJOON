const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString();
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());


function solution(S) {
    const arr = [];
    const str = S.toUpperCase().split(""); //input값 대문자로 변경해서 하나하나씩 배열형식으로 할당
    const compareValuses = str.filter((e, i, t) => {return t.indexOf(e) === i}); // 중복 제거
    for(i=0; i<compareValuses.length; i++) {
        let count = 0;
        for(j=0; j<str.length; j++) {
            if(compareValuses[i] === str[j]) {
                count++;
            }
        }
        if(count > Math.max(...arr)) {
            console.log(compareValuses[i])
        } else if(count == Math.max(...arr)) {
            console.log("?");
        }
        arr.push(count);
    }
    console.log(arr)
}

//이걸 코드라고 짜다니 죽어랏!
solution(input);