// https://school.programmers.co.kr/learn/courses/30/lessons/120887

// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return

import _ from "lodash";
function solution(i: number, j: number, k: number): number {
  const numberRange = _.range(i, j + 1).join("");
  const regex = new RegExp(`[^${k}]`, "g");

  return numberRange.replace(regex, "").length;
}

console.log(solution(1, 13, 1));
