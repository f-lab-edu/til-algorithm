// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
function squarRoot(n: number): number {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

console.log(squarRoot(25));
console.log(squarRoot(12));
