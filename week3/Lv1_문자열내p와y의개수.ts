// 대문자와 소문자가 섞여있는 문자열 s
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
// 단, 개수를 비교할 때 대문자와 소문자는 구별 X

function pAndYNum(s: string): boolean {
  const pNum = [...s.toUpperCase()].filter((str) => str === "P").length;
  const yNum = [...s.toUpperCase()].filter((str) => str === "Y").length;

  return pNum === yNum;
}

console.log(pAndYNum("pPpoooyYy"));
console.log(pAndYNum("Pyy"));
