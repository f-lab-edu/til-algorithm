// 어떤 세균은 1시간에 두배만큼 증식
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return
// 1 ≤ n ≤ 10, 1 ≤ t ≤ 15

function bacterialCount(n: number, t: number): number {
  return n * Math.pow(2, t);
}

console.log(bacterialCount(2, 10));
