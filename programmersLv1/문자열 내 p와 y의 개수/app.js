const input = "pPoppoyyppyYyy";

function solution(s) {
  var answer = true;
  let countP = 0;
  let countY = 0;
  s = s.toUpperCase().split("");
  s.forEach((x) => {
    x === "P" ? countP++ : x === "Y" ? countY++ : "";
  });
  countP === countY ? (answer = true) : (answer = false);
  console.log(s, countP, countY, answer);
  i = input.toUpperCase().split("P");
  d = input.match(/p/gi);
  console.log(i, d);
}

solution(input);
