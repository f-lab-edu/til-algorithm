// https://school.programmers.co.kr/learn/courses/30/lessons/181917
// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return
// (x1 ∨ x2) ∧ (x3 ∨ x4)
// ∨: 둘 중 하나라도 true가 있을 때 , ∧: 둘다 true일 때

function solution(x1: boolean, x2: boolean, x3: boolean, x4: boolean): boolean {
  return (x1 || x2) && (x3 || x4);
}
