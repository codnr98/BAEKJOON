const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString();
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

function comparator(compare) {
    for(k=1; k<compare.length; k++) {
        if(compare[k] !== compare[k-1]) { // length가 2이하면 true를 return해야됨
           return false;
        }
        return true;
    }
};

function solution(N) {
    let count = 0;
    for(i=1; i<=N; i++) { 
        let arr;
        arr = (i.toString().split("").map(item => +item)); // split()은 string에만 적용 된다.

        let compare = []; // 등차수열이 맞는지 확인 해야할 값을 보관
        for(j=1; j<arr.length; j++) {
            compare.push(arr[j-1] - arr[j]);
        };
        if(comparator(compare) === true || comparator(compare) === undefined) {
            count++;
        };

    }
    console.log(count);
}

solution(+input)