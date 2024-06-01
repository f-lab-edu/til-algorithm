// https://school.programmers.co.kr/learn/courses/30/lessons/120888
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return

function removeDuplicate(my_string: string): string {
  return [...new Set(my_string)].join("");
}

console.log(removeDuplicate("We are the world"));
console.log(removeDuplicate("people"));
