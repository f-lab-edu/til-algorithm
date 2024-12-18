// https://school.programmers.co.kr/learn/courses/30/lessons/181892
// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return

function sliceNumList(num_list: number[], n: number): number[] {
  return num_list.slice(n - 1);
}
