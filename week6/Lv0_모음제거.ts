// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return

import _ from "lodash";
function removeVowels(my_string: string): string {
  //const vowels = "aeiou";
  const vowels = ["a", "e", "i", "o", "u"];

  const onlyConsonant = _.remove(
    [...my_string],
    (str) => !vowels.includes(str)
  );

  return onlyConsonant.join("");
}

console.log(removeVowels("i love apple"));
console.log(removeVowels("bus"));
console.log(removeVowels("nice to meet you"));
