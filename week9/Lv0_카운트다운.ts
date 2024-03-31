// https://school.programmers.co.kr/learn/courses/30/lessons/181899
// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return

import _ from "lodash";
function countDown(start_num: number, end_num: number): number[] {
  return _.range(start_num, end_num - 1, -1);
}

console.log(countDown(10, 3));
