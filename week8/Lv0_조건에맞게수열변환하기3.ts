// https://school.programmers.co.kr/learn/courses/30/lessons/181835
// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
// arr를 return

function arrayConversion(arr: number[], k: number): number[] {
  return arr.map((num) => (k % 2 === 0 ? num + k : num * k));
}

console.log(arrayConversion([1,2,3,4], 4));
console.log(arrayConversion([1,2,3,4], 5));
