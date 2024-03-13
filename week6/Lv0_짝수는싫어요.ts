// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return

import _ from "lodash";
function hateEven(n: number): number[] {
  return _.range(1, n + 1, 2);
}

console.log(hateEven(17));
console.log(hateEven(10));
