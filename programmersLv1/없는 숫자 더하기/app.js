const input = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(number) {
  //넘버 조인하고 매치로 없는 스트링 찾은다음 더해주기
  // i 와 같으면 += i 해준다 그리고 반복문 끝나면 결과 값 출력
  let answer = 0;
  for (i = 0; i <= 9; i++) {
    if (number.indexOf(i) === -1) {
      answer += i;
    }
  }

  return answer;
}

solution(input);
