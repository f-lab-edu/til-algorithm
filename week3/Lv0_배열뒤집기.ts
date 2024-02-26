//num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return
//import _ from "lodash";

function reverseNum(num_list: number[]): number[] {
  return num_list.reverse();
}

// function lodash_reverseNum(num_list: number[]): number[] {
//   return _.sortBy(num_list).reverse();
// }

console.log(reverseNum([1, 2, 3, 4, 5, 6]));
//console.log(lodash_reverseNum([1, 2, 3, 4, 5, 6]));
