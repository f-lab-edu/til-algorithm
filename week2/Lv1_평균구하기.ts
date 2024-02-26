// function average(arr: number[]): number {
//   let numPlus = 0;

//   arr.forEach((num) => {
//     numPlus += num;
//   });

//   const answer = numPlus / arr.length;

//   return answer;
// }

import _ from "lodash";

function average(arr: number[]): number {
  const numPlus = _.sum(arr);

  return numPlus / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
