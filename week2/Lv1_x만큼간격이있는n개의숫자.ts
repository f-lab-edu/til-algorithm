// 정수 x와 자연수 n
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
// => x의 배수 n개를 리턴하면 됨

// function multipleArray(x: number, n: number): number[] {
//   const answer: number[] = [];
//   let num = 0;

//   while (answer.length < n) {
//     num += x;
//     answer.push(num);
//   }

//   return answer;
// }

import _ from "lodash";

function multipleArray(x: number, n: number): number[] {
  const xArray = _.range(x, x * n + 1, x);

  return xArray;
}

console.log(multipleArray(2, 5));
