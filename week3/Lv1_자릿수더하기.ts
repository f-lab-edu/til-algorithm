// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return

function addDigits(n: number): number {
  const stringN = String(n);

  return [...stringN].reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(addDigits(3960));
