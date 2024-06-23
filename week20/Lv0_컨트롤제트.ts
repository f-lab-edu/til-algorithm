// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다.
// 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return

// 공백을 기준으로 배열로 변환
// 배열을 돌면서 z가 나오면 그전 숫자와 같이 빼주기 => 괄호 같은 문제
// 남은 숫자들 다 합하기
import _ from "lodash";
function controlZ(s: string): number {
  const stack = [];

  for (const y of s.split(" ")) {
    if (y === "Z") {
      stack.pop();
      continue;
    }
    stack.push(y);
  }

  return stack.length === 0 ? 0 : _.sum(stack.map(Number));
}

console.log(controlZ("1 2 Z 3"));
console.log(controlZ("10 20 30 40"));
console.log(controlZ("10 Z 20 Z 1"));
console.log(controlZ("10 Z 20 Z"));
console.log(controlZ("-1 -2 -3 Z"));
