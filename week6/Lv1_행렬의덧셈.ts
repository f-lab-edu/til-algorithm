// https://school.programmers.co.kr/learn/courses/30/lessons/12950
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환

function addRowColumn(arr1: number[][], arr2: number[][]): number[][] {
  return arr1.map((numArr, arrIdx) =>
    numArr.map((num, idx) => num + arr2[arrIdx][idx])
  );
}

console.log(
  addRowColumn(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

console.log(addRowColumn([[1], [2]], [[3], [4]]));
