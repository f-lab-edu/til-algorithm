// absolutes: 정수들의 절댓값을 차례대로 담은 정수 배열
// signs: 정수들의 부호를 차례대로 담은 불리언 배열
// 실제 정수들의 합을 구하여 return

import _ from "lodash";
function sumArray(absolutes: number[], signs: boolean[]): number {
  const positiveSum = _.sum(absolutes.filter((_, idx) => signs[idx] === true));
  const negativeSum = _.sum(absolutes.filter((_, idx) => signs[idx] === false));

  return positiveSum - negativeSum;
}

console.log(sumArray([2, 4, 7, 5], [false, true, true, false]));
