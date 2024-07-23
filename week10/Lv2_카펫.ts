// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return
// 카펫의 가로는 세로보다 같거나 길다.

function findCarpetSize(brown: number, yellow: number): number[] {
  const sumOfCarpetWAndH = (brown + 4) / 2;
  const carpetSize = [];
  const yellowHeightRange = sumOfCarpetWAndH / 2;

  for (let i = 3; i <= yellowHeightRange; i++) {
    const yellowWidth = sumOfCarpetWAndH - i;
    const yellowCount = (i - 2) * (yellowWidth - 2);

    if (yellowCount === yellow) {
      carpetSize[0] = yellowWidth;
      carpetSize[1] = i;
    }
  }
  return carpetSize;
}

console.log(findCarpetSize(10, 2));
console.log(findCarpetSize(24, 24));
