const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString();
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());


function solution(S) {
    const str = S.toUpperCase().split("");
    const compareValues = [];
    let result;
    for(i=65; i<91; i++) {
        let count = 0;
        for(j=0; j<str.length; j++) {
            if(String.fromCharCode(i) === str[j]) {
                count++;
            }
        }

        if(count > Math.max(...compareValues)) {
            result = String.fromCharCode(i);
        } else if(count == Math.max(...compareValues)) {
            result = "?";
        }
        compareValues.push(count);
    }
    console.log(result)
}

//이걸 코드라고 짜다니 죽어랏!  
solution(input);