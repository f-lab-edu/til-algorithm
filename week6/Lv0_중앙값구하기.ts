// 중앙값 = 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return
// 정수 배열 array의 길이는 홀수

import _ from "lodash";

function median(array: number[]): number {
  const sortArray = _.sortBy(array);
  const medianIdx = Math.ceil(array.length / 2) - 1;
  //const medianIdx = Math.floor(array.length / 2);

  return sortArray[medianIdx];
}

console.log(median([1, 11, 7, 2, 10]));
