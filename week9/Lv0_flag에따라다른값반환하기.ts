// https://school.programmers.co.kr/learn/courses/30/lessons/181933
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return

function flagCheck(a: number, b: number, flag: boolean): number {
  return flag ? a + b : a - b;
}

console.log(flagCheck(-4, 7, true));
console.log(flagCheck(-4, 7, false));
