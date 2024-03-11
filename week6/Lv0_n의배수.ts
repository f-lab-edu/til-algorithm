// https://school.programmers.co.kr/learn/courses/30/lessons/181937
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return

function multiple(num: number, n: number): number {
  return num % n === 0 ? 1 : 0;
}

console.log(multiple(98, 2));
console.log(multiple(34, 3));
