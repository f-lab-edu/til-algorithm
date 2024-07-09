// https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주

import _ from "lodash";
function stringDesc(s: string): string {
  return _.orderBy([...s], _, "desc").join("");
}

console.log(stringDesc("Zbcdefg"));
