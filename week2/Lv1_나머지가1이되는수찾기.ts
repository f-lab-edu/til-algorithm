// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return
// 3 ≤ n ≤ 1,000,000

// function remainderIs1(n: number): number {
//   let x = 1;

//   while (x++) {
  
//     if (n % x === 1) {
//       return x;
//     }
//   }

//   return x;
// }

function remainderIs1(n: number): number {
  let x = 1;

  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      x = i;
      return x;
    }
  }

  return x;
}

console.log(remainderIs1(3));
console.log(remainderIs1(4));
console.log(remainderIs1(5));
console.log(remainderIs1(6));
console.log(remainderIs1(7));
console.log(remainderIs1(10));
