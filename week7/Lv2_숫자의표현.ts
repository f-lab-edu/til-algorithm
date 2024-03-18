// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 자연수 n을 연속한 자연수들로 표현 하는 방법
// 예) 15는 다음과 같이 4가지로 표현
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return

function solution(n: number): number {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const modifiedFormula = (2 * n) / i + 1 - i;
    if (modifiedFormula <= 0) {
      break;
    }

    if (modifiedFormula > 0) {
      if (modifiedFormula % 2 === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(solution(15));
console.log(solution(10));
