// https://school.programmers.co.kr/learn/courses/30/lessons/181942

// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return

function solution(str1: string, str2: string): string {
  let newStr = "";
  for (let i = 0; i < str1.length; i++) {
    newStr += str1[i] + str2[i];
  }
  return newStr;
}

console.log(solution("123", "456"));
