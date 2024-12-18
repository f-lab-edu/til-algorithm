// https://school.programmers.co.kr/learn/courses/30/lessons/120835
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return

import _ from "lodash";
function solution(emergency: number[]): number[] {
  const treatmentOrder = _.orderBy(emergency, _, "desc");

  return emergency.map((x) => treatmentOrder.indexOf(x) + 1);
}

console.log(solution([3, 76, 24])); //[(3, 1, 2)]
// console.log(solution([1, 2, 3, 4, 5, 6, 7])); //[(7, 6, 5, 4, 3, 2, 1)]
// console.log(solution([30, 10, 23, 6, 100])); // [(2, 4, 3, 5, 1)];
