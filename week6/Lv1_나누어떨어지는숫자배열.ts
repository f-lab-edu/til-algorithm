// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환

import _ from "lodash";
function dividedArray(arr: number[], divisor: number): number[] {
  const divided = arr.filter((num) => num % divisor === 0);

  return divided.length === 0 ? [-1] : _.sortBy(divided);
}

console.log(dividedArray([5, 9, 7, 10], 5));
console.log(dividedArray([2, 36, 1, 3], 1));
console.log(dividedArray([3, 2, 6], 10));
