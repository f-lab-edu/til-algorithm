// https://school.programmers.co.kr/learn/courses/30/lessons/181929
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return

import _ from "lodash";
function multiplyCompare(num_list: number[]): number {
  const multiplyNum = num_list.reduce((acc, cur) => acc * cur, 1);
  const sumMultiply = Math.pow(_.sum(num_list), 2);

  return multiplyNum < sumMultiply ? 1: 0;
}

console.log(multiplyCompare([3, 4, 5, 2, 1]));
console.log(multiplyCompare([5, 7, 8, 3]));
