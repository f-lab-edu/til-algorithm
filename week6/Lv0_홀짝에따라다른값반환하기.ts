// https://school.programmers.co.kr/learn/courses/30/lessons/181935
// 양의 정수 n이 매개변수로 주어질 때,
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return,
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return

import _ from "lodash";
function differentEvenOdd(n: number): number {
  if (n % 2 === 0) {
    const evenArr = _.range(2, n + 1, 2);

    return _.sumBy(evenArr, (num) => Math.pow(num, 2));
  } else {
    const oddArr = _.range(1, n + 1, 2);

    return _.sum(oddArr);
  }
}

console.log(differentEvenOdd(7));
console.log(differentEvenOdd(10));

