//https://school.programmers.co.kr/learn/courses/30/lessons/181863
// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다.
// 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return

function changeStr(rny_string: string): string {
  return rny_string.replace(/m/g, "rn");
}

console.log(changeStr("masterpiece"));
console.log(changeStr("programmers"));
console.log(changeStr("burn"));