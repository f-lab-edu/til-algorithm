// https://school.programmers.co.kr/learn/courses/30/lessons/68935
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return

function ternaryFlip(n: number): number {
  const ternary = n.toString(3);
  const flipNum = [...ternary].reverse().join("");

  return Number.parseInt(flipNum, 3);
}

console.log(ternaryFlip(45));
console.log(ternaryFlip(125));
