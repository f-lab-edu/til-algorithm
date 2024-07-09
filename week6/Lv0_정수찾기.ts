// https://school.programmers.co.kr/learn/courses/30/lessons/181840
// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return

function searchNum(num_list: number[], n: number): number {
  return num_list.includes(n) ? 1 : 0;
}

console.log(searchNum([12, 4, 56, 3, 2], 2));
console.log(searchNum([12, 4, 56, 3, 2], 17));
