//import _ from "lodash";

function reverseString(my_string: string): string {
  return [...my_string].reverse().join("");
}

// function lodash_reverseString(my_string: string): string {
//   const reverse = _.reverse([...my_string]);

//   return _.join(reverse, "");
// }

console.log(reverseString("가나다라마바사"));
//console.log(lodash_reverseString("가나다라마바사"));
