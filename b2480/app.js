const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const clockInput = input[0].split(" ");

const numInput = [];
for(i = 0; i < clockInput.length; i++) {
    numInput.push(+clockInput[i]);
}

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  

// count가 0이면 3번식, 1이면 2번식, 2면 3번식
let count = 0;
let bLsult = 0;

function parse(x, y ,z) {
    if(i == 0) {
        if(x == y){
            count++;
        }
    } else {
        if(x == z) {
            count++ 
        }
    }
};

// 첫번째 parse함수를 실행 시켰을때 count가 0나오면 b로 비교하는 parse함수를 실행시켜준다
function comparison(a, b, c) {
    for(i = 0; i < 2; i++){
        parse(a, b, c);
        bLsult = a;
        if(count == 0) {
            parse(b, a, c);
            bLsult = b;
        }
    };
    if(count == 0){
        if(a < b) { 
            if(b < c) {
                console.log(c * 100);
            } else {
                console.log(b * 100);
            }
        } else if(a < c){
            console.log(c * 100);
        } else {
            console.log(a * 100);
        }
    };
    if(count == 1){
        if(count == 0){
    if(a < b) { 
        if(b < c) {
            console.log(c * 100);
        } else {
            console.log(b * 100);
        }
    } else if(a < c){
        console.log(c * 100);
    } else {
        console.log(a * 100);
    }
}
if(count == 1){
    console.log(1000+(bLsult)*100)
}
if(count == 2){
    console.log(10000+(a)*1000)
}
    };
    if(count == 2){
        console.log(10000+(a)*1000)
    };
};

comparison(numInput[0], numInput[1], numInput[2]);


