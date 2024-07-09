// https://school.programmers.co.kr/learn/courses/30/lessons/181939
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환
// 12 ⊕ 3 = 123, 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return

function maxAttachNum(a: number, b: number): number {
  const attachAandB = Number(String(a) + String(b));
  const attachBandA = Number(String(b) + String(a));

  return Math.max(attachAandB, attachBandA);
}

console.log(maxAttachNum(12, 5));
console.log(maxAttachNum(45, 4));
