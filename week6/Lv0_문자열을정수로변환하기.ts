// https://school.programmers.co.kr/learn/courses/30/lessons/181848
// 숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return

function strToNum(n_str: string): number {
  return Number(n_str);
}

console.log(typeof strToNum("1234"));
