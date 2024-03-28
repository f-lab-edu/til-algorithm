// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문 return

function solution(s: string, n: number): string {
  return [...s]
    .map((_, idx) => {
      const ascii = s.charCodeAt(idx);
      return String.fromCharCode(ascii + n);
    })
    .join("");
}

console.log(solution("AB", 1));
