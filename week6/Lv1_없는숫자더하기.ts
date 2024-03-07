// 매개변수 => 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return

import _ from "lodash";

function addMissingNumber(numbers: number[]): number {
  const numArray = _.range(0, 10, 1);
  const noNumbers = numArray.filter((num) => !numbers.includes(num));

  return _.sum(noNumbers);
}

console.log(addMissingNumber([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(addMissingNumber([5, 8, 4, 0, 6, 7, 9]));
