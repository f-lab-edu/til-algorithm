// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return

function remainderIs1(n: number): number {
  let x = 1;

  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }

  return x;
}

console.log(remainderIs1(1));
console.log(remainderIs1(10));
