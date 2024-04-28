// https://school.programmers.co.kr/learn/courses/30/lessons/181856

// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.

// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return

import _ from "lodash";
function comparingArrays(arr1: number[], arr2: number[]): number {
  if (arr1.length === arr2.length) {
    const sumOfArr1 = _.sum(arr1);
    const sumOfArr2 = _.sum(arr2);

    if (sumOfArr1 === sumOfArr2) {
      return 0;
    } else {
      return Math.max(sumOfArr1, sumOfArr2) === sumOfArr1 ? 1 : -1;
    }
  }
  return Math.max(arr1.length, arr2.length) === arr1.length ? 1 : -1;
}

console.log(comparingArrays([49, 13], [70, 11, 2]));
console.log(comparingArrays([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(comparingArrays([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
