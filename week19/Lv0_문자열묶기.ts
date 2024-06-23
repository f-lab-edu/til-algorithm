// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return

import _ from "lodash";
function solution(strArr: string[]): number {
  const a = _.groupBy(strArr, "length");

  return Math.max(...Object.values(a).map((x) => x.length));
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
