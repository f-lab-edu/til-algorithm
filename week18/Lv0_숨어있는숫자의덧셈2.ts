// https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return

import _ from "lodash";
function solution(my_string: string): number {
  // return _.sum(
  //   my_string
  //     .split(/\D+/)
  //     .filter((num) => num !== "")
  //     .map(Number)
  // );
  
  return _.sum(_.compact(my_string.split(/\D+/)).map(Number));
}
console.log(solution("aAb1B2cC34oOp"));
