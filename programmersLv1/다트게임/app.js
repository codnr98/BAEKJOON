let input = "1D2S#10S";

function solution(dartResult) {
  // 첫번째 점수를 환산
  // 두번쨰 점수를 환산하면서 전 점수를 반영하여 누적 계산
  // 위와 동일
  //옵션은 세개 점수, 보너스, 옵션
  // 점수에 보너스가 붙으면 두배 계산
  // 옵션중 별을 받을 경우
  let point = dartResult.split("");
  var arr = [];
  for (i = 0; i < 3; i++) {
    if (point[1] === "0") {
      arr[i] = point[0] + point[1];
      point.splice(0, 2);
    } else {
      arr[i] = point[0];
      point.splice(0, 1);
    }
    console.log(arr);
    if (point[0] === "S") {
      arr[i] **= 1;
    }
    if (point[0] === "D") {
      arr[i] **= 2;
    }
    if (point[0] === "T") {
      arr[i] **= 3;
    }

    if (point[1] === "*") {
      arr[i] *= 2;
      if (i > 0) {
        arr[i - 1] *= 2;
      }
    } else if (point[1] === "#") {
      arr[i] *= -1;
    }

    point[1] === "*" || point[1] === "#"
      ? point.splice(0, 2)
      : point.splice(0, 1);
  }
  // console.log(arr);
  let answer = 0;
  arr.map((x) => (answer += x));
  // console.log(answer);
  return answer;
}

solution(input);
