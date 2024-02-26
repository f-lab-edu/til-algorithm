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

  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sqrtArray.push(i);

      if (n / i !== i) {
        sqrtArray.push(n / i);
      }
    }
  }

  return _.sum(sqrtArray);
}

console.log(divisorSum(100));
console.log(divisorSum(6));
