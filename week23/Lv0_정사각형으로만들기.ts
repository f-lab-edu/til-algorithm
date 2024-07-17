// https://school.programmers.co.kr/learn/courses/30/lessons/181830

// 이차원 정수 배열 arr이 매개변수로 주어집니다.
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return

// 행의 수 > 열의 수 => 각 행의 끝에 0 추가
// 행의 수 < 열의 수 => 각 열의 끝에 0 추가
// 행의 수 = 열의 수 => 변화 없음

function makeSquare(arr: number[][]): number[][] {
  const rowCount = arr.length;
  const columnCount = arr[0].length;

  if (rowCount > columnCount) {
    for (const x of arr) {
      x.push(...Array(rowCount - x.length).fill(0));
    }
  }

  if (rowCount < columnCount) {
    arr.push(
      ...Array(columnCount - arr.length).fill(Array(columnCount).fill(0))
    );
  }
  return arr;
}

// 행의 수 > 열의 수
console.log(
  makeSquare([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);

// 행의 수 < 열의 수
console.log(
  makeSquare([
    [572, 22, 37, 43, 32],
    [287, 726, 384, 12, 22],
    [85, 137, 292, 234, 54],
  ])
);

// 행의 수 = 열의 수
console.log(
  makeSquare([
    [572, 22],
    [287, 726],
  ])
);
