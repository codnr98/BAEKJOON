const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let input = Number(require('fs').readFileSync('/dev/stdin').toString());
input = +input

    let value = input;
    i= 0;
    while(true){ 
        
        let sum = parseInt(value / 10) + value % 10;
        value = value % 10 * 10 + sum % 10;
        i++;
        if(value == input) {
            break;
        }
    }
    console.log(i);

