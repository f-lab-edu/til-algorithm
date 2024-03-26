// https://school.programmers.co.kr/learn/courses/30/lessons/181853
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return

import _ from "lodash";
function smallNum(num_list: number[]): number[] {
  return _.sortBy(num_list).splice(0, 5);
}

console.log(smallNum([12, 4, 15, 46, 38, 1, 14]));
