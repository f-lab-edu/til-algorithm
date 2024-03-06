// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 return
// a와 b의 대소관계는 정해져있지 않습니다.
import _ from "lodash";

function betweenSum(a: number, b: number): number {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const numArray = _.range(min, max + 1, 1);

  return _.sum(numArray);
}

console.log(betweenSum(3, 6));
console.log(betweenSum(2, 9));
console.log(betweenSum(7, 3));
