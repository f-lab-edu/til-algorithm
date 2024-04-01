// function divisorSum(n: number): number {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       answer += i;
//     }
//   }

//   return answer;
// }

import _ from "lodash";

function divisorSum(n: number): number {
  const sqrtArray: number[] = [];
  const sqrtNum = Math.sqrt(n);

  for (let i = 1; i <= sqrtNum; i++) {
    if (n % i === 0) {
      sqrtArray.push(i);
      sqrtArray.push(n / i);
    }
  }

  if (Number.isInteger(sqrtNum)) {
    sqrtArray.splice(sqrtArray.indexOf(sqrtNum), 1);
  }

  return _.sum(sqrtArray);
}

console.log(divisorSum(100));
console.log(divisorSum(6));
