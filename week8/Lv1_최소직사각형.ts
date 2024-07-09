// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return

function walletSize(sizes: number[][]): number {
  const max = sizes.map((num) => Math.max(...num));
  const min = sizes.map((num) => Math.min(...num));

  return Math.max(...max) * Math.max(...min);
  
}

console.log(
  walletSize([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
