// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의
// 1. x의 모든 0을 제거
// 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 변환
// ex) x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100"
// 0과 1로 이루어진 문자열 s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
// [이진 변환의 횟수, 변환 과정에서 제거된 모든 0의 개수] return

import _ from "lodash";
function BinaryConversion(s: string): number[] {
  let count = 0;
  let removeCount = 0;
  do {
    const arr = [...s];
    const removeZero = _.remove(arr, (num) => num === "0");

    s = arr.length.toString(2);

    count++;
    removeCount += removeZero.length;
  } while (s !== "1");

  return [count, removeCount];
}

console.log(BinaryConversion("0111010"));
console.log(BinaryConversion("110010101001"));
console.log(BinaryConversion("01110"));
console.log(BinaryConversion("1111111"));