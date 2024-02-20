function divisorSum(n: number): number {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

console.log(divisorSum(10));
console.log(divisorSum(6));
