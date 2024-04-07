// https://school.programmers.co.kr/learn/courses/30/lessons/181901
// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return

// 1이상 n이하의 배열을 만든다
// 그 중 k의 배수만 필터링한다
// => 1이상 n이하의 수 중 k의 배수로 배열을 만든다.
// 배열을 오름차순으로 저장한다.

import _ from "lodash";
function makeKMultiplesArray(n: number, k: number): number[] {
  return _.range(k, n + 1, k);
}

console.log(makeKMultiplesArray(20, 4));
console.log(makeKMultiplesArray(100, 5));
