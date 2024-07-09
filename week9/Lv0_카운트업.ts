// https://school.programmers.co.kr/learn/courses/30/lessons/181920
// 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return

import _ from "lodash";
function countUp(start_num: number, end_num: number): number[] {
  return _.range(start_num, end_num + 1, 1);
}

console.log(countUp(3, 10));
