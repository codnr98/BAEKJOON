const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const clockInput = input[0].split(" ");
const costInput = +input[1];

const numInput = [];
for(i = 0; i < clockInput.length; i++) {
    numInput.push(+clockInput[i]);
}



function solution(hour, minute, cost) {
    const plusHour = parseInt((minute + cost)/60);
    hour += plusHour;
    minute = (minute + cost) % 60;



    if(hour >= 24) {
        hour -= 24;
    }
    console.log(hour, minute);
}

solution(numInput[0], numInput[1], costInput);