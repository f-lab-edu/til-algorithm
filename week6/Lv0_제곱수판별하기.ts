// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return

function squarNumber(n: number): number {
  const sqrtNum = Math.sqrt(n);

  return Number.isInteger(sqrtNum) ? 1 : 2;
}

console.log(squarNumber(144));
console.log(squarNumber(976));
