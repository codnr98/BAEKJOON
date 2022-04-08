const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");


solution(input[0], input.slice(1));// slice(1)를 사용해서 index번호 1부터 length까지 배열을 word로 받는다.



function inspect(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x)); //some과 indexOf, lastIndexOf를 사용해서 중복값이 확인되면 바로 ture을 returt한다.
}

function solution(t, word) {
    let count = t; //중복되는 값이 없을경우를 기본값인 t가 출력된다.
    for(i=0; i<t; i++) { //for을 사용해서 word배열 값들을 하나씩 꺼내와 연속으로 나오는 알파벳들을 걸러서 arr에 push한다.
        const alphabet = word[i];
        const arr = [];
        for(j=0; j<alphabet.length; j++) {
            if(alphabet[j-1] !== alphabet[j]) {
                arr.push(alphabet[j]);
            }
        }
        inspect(arr); 
        if(inspect(arr) === true){ //중복되는 alphabet이 있는 단어가 나오면 count를 -1한다.
            count--;
        }
    }
    console.log(count); //최종적으로 계산이 끝난 카운터 값을 출력한다.
}



