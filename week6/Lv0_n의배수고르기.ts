// 매개변수 => 정수 n과 정수 배열 numlist
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return
import _ from "lodash";

function multipleArray(n: number, numlist: number[]): number[] {
  return _.remove(numlist, (num) => num % n === 0);
}

console.log(multipleArray(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(multipleArray(12, [2, 100, 120, 600, 12, 12]));
