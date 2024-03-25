// https://school.programmers.co.kr/learn/courses/30/lessons/181889
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return

function from0ToN(num_list: number[], n: number): number[] {
  return num_list.slice(0, n);
}

console.log(from0ToN([1, 2, 3, 4, 5, 6], 3));
