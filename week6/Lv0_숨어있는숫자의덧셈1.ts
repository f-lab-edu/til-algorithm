// 문자열 my_string이 매개변수로 주어짐.
//  my_string안의 모든 자연수들의 합을 return
import _ from "lodash";

function addHiddenNumber(my_string: string): number {
  const regex = /\d/;
  const numStr = [...my_string].filter((str) => regex.test(str)).map(Number);
  console.log(numStr);

  return _.sum(numStr);
}

console.log(addHiddenNumber("aAb1B2cC34oOp"));
console.log(addHiddenNumber("1a2b3c4d123"));
console.log(addHiddenNumber("afjdhiejovFge"));
