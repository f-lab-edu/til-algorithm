// function averageOfArray(numbers: number[]): number {
//   let average = 0;

//   numbers.forEach((num) => {
//     average += num;
//   });

//   return average / numbers.length;
// }

// function averageOfArray(numbers: number[]): number {
//   const sum = numbers.reduce((acc, cur) => acc + cur, 0);

//   return sum / numbers.length;
// }

import _ from "lodash";

function averageOfArray(numbers: number[]): number {
  const sum = _.sum(numbers);

  return sum / numbers.length;
}

console.log(averageOfArray([2, 6, 7, 8, 12]));
console.log(averageOfArray([2, 6, 7, 8, 12, 24, 25]));
