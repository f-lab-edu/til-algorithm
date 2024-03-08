// 정수 number와 n, m이 주어짐
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return

function commonMultiple(number: number, n: number, m: number): number {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

console.log(commonMultiple(60, 2, 3));
console.log(commonMultiple(55, 10, 5));
