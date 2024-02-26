// n의 각 자릿수를 내림차순으로 정렬한 새로운 정수 return

function newDescNum(n: number): number {
  const stringN = String(n);
  const numArray = [...stringN].map((str) => Number(str));

  return Number(numArray.sort((a, b) => b - a).join(""));
}

console.log(newDescNum(38271));
