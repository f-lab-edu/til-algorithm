// 매개변수 => 문자열 my_string,  문자 letter
// my_string에서 letter를 제거한 문자열을 return
// my_string과 letter은 알파벳 대소문자, letter은 길이가 1인 영문자
// 대소문자 구분

function removeLetter(my_string: string, letter: string): string {
  return [...my_string].filter((str) => str !== letter).join("");
}

console.log(removeLetter("abcdef1", "f"));
console.log(removeLetter("BCBdbe", "B"));
