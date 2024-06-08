// https://school.programmers.co.kr/learn/courses/30/lessons/120896

// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return

//
function solution(s: string): string {
  return [...s]
    .filter((str) => {
      const x = [...s];
      x.splice(x.indexOf(str), 1);

      return !x.includes(str);
    })
    .sort()
    .join("");
}

console.log(solution("abcabcadc"));
