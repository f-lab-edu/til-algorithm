// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return
// 임의로 아무렇게나 순서를 바꾸어도 after를 만들 수 있어야함

function aToB(before: string, after: string): number {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}
