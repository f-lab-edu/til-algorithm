// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문 return

// 문자열 배열로 변환 후 map으로 돌기
// n 만큼 민 아스키코드가 90이나 122 를 넘어갈 경우 a에서부터 시작하도록 하기

function solution(s: string, n: number): string {
  const ASCII_UPPER_CASE_Z = 90;
  const ASCII_LOWER_CASE_Z = 122;
  const ASCII_LOWER_CASE_A = 97;

  return [...s]
    .map((str) => {
      const ascii = str.charCodeAt(0);
      const changedAscii = ascii + n;

      if (str === " ") return " ";

      if (ascii >= ASCII_UPPER_CASE_Z && ascii <= ASCII_UPPER_CASE_Z) {
        if (changedAscii > ASCII_UPPER_CASE_Z) {
          return String.fromCharCode(changedAscii - 26);
        }
      }

      if (ascii >= ASCII_LOWER_CASE_A && ascii <= ASCII_LOWER_CASE_Z) {
        if (changedAscii > ASCII_LOWER_CASE_Z) {
          return String.fromCharCode(changedAscii - 26);
        }
      }

      return String.fromCharCode(changedAscii);
    })
    .join("");
}

console.log(solution("AB", 1));
console.log(solution("a B z", 4));
console.log(solution("w z Y c", 6));
console.log(solution("AaZz", 25));
