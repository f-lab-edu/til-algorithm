// https://school.programmers.co.kr/learn/courses/30/lessons/181903

// 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return

function qrCode(q: number, r: number, code: string): string {
  return [...code].filter((_, idx) => idx % q === r).join("");
}

console.log(qrCode(3, 1, "qjnwezgrpirldywt"));
