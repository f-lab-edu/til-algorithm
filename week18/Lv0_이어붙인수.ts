// https://school.programmers.co.kr/learn/courses/30/lessons/181928
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return

function joinNumbers(num_list: number[]): number {
  const even = Number(num_list.filter((num) => num % 2 === 0).join(""));
  const odd = Number(num_list.filter((num) => num % 2 !== 0).join(""));

  return even + odd;
}
