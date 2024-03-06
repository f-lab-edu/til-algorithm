// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return

function numberPairCount(n: number): number {
  const measure: number[] = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      measure.push(i);
    }
  }

  return measure.length;
}

console.log(numberPairCount(16));
console.log(numberPairCount(20));
