// 정수를 저장한 배열 arr 에서 가장 작은 수를 제거한 배열을 리턴
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
import _ from "lodash";

function smallNumRemove(arr: number[]): number[] {
  if (arr.length > 1) {
    return _.remove(arr, (num) => num !== Math.min(...arr));
  }

  return [-1];
}

console.log(smallNumRemove([4, 3, 2, 1]));
console.log(smallNumRemove([10]));
