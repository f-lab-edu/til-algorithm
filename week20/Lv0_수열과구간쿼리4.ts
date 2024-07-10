// https://school.programmers.co.kr/learn/courses/30/lessons/181922

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return

// s와 e사이 값의 배열 만들기
// 배열 원소 중 k의 배수인 수만 필터링
// 그 수의 인덱스 값을 구하여 arr의 자리에 + 1
import _ from "lodash";
function queries4(arr: number[], queries: number[][]): number[] {
  for (const [s, e, k] of queries) {
    const x = _.range(s, e + 1);
    const y = x.filter((num) => num % k === 0).map((num) => x.indexOf(num))

    for (const z of y) {
      [arr[z]] = [arr[z] + 1];
    }
  }

  return arr;
}

console.log(
  queries4(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);

console.log(
  queries4(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      [3, 9, 4],
      [0, 6, 3],
    ]
  )
);

console.log(
  queries4(
    [0, 1, 2, 4, 3],
    [
      [1, 4, 1],
      [1, 3, 2],
      [1, 3, 3],
    ]
  )
);
