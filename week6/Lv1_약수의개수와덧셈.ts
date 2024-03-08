// 매개변수 => 두 정수 left와 right
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return

import _ from "lodash";
function divisorCalculation(left: number, right: number): number {
  const numArray = _.range(left, right + 1, 1);

  const addNum = numArray.reduce((acc, cur) => {
    let count = 0;
    for (let i = 1; i <= cur; i++) {
      if (cur % i === 0) {
        count++;
      }
    }


    return count % 2 === 0 ? acc + cur : acc - cur;
  }, 0);

  return addNum;
}

console.log(divisorCalculation(13, 17));
console.log(divisorCalculation(24, 27));