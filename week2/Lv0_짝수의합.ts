// n 이하의 짝수의 합 return

// function evenSum(n: number): number {
//   let answer = 0;

//   for (let num = 0; num <= n; num++) {
//     if (num % 2 === 0) {
//       answer += num;
//     }
//   }

//   return answer;
// }
import _ from "lodash";

function evenSum(n: number): number {
  const evenArray = _.range(2, n, 2);

  return _.sum(evenArray);
}

console.log(evenSum(20));
console.log(evenSum(17));
