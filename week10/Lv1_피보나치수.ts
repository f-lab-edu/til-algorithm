// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수
// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 return
function divideFibonacci(n: number): number {
  let count = 0;
  for (const x of fibonacci()) {
    if (count === n) {
      return x;
    }
    count++;
  }
}

function* fibonacci(): Iterable<number> {
  let n1 = 0;
  let n2 = 1;
  yield n1;

  while (true) {
    yield n2;
    const n3 = (n1 + n2) % 1234567;
    n1 = n2;
    n2 = n3;
  }
}

console.log(divideFibonacci(3));
console.log(divideFibonacci(5));
console.log(divideFibonacci(8));
console.log(divideFibonacci(1000));
console.log(divideFibonacci(999));
console.log(divideFibonacci(1001));
console.log(divideFibonacci(1002));
