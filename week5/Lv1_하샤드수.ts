// 하샤드 수인지 검사 결과 return
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 함
// ex) 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수

import _ from "lodash";
function harshad(x: number): boolean {
  const numArray = [...String(x)].map(Number);
  const sum = _.sum(numArray);

  return x % sum === 0;
}

console.log(harshad(235));
console.log(harshad(18));
