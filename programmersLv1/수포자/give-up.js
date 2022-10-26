function solution(answers) {
  var answer = [];
  var result = [];
  //패턴을 답지길이 만큼 때려 넣는다.
  function grade(num) {
    let input = "";
    let count = 0;
    for (i = 0; input.length <= answers.length; i++) {
      input += num;
    }
    let arr = input.slice(0, answers.length).split("");
    arr.forEach((element, index) => {
      if (answers[index] == element) {
        count++;
      }
    });
    answer.push(count);
    return count;
  }
  // 가장 큰 값과 같다면 배열에 넣는다.
  function evaluation(f) {
    f.forEach((x) => {
      if (x == Math.max(...answer)) {
        result.push(x);
      }
    });
  }
  evaluation([grade("12345"), grade("21232425"), grade("3311224455")]);
  console.log(result);
}
solution([1, 2, 3, 4, 5]);
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
