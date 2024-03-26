// https://school.programmers.co.kr/learn/courses/30/lessons/181884
// 정수 배열 numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 정수 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return

function sumNumBiggerThanN(numbers: number[], n: number): number {
  return numbers.reduce((acc, cur) => (acc > n ? acc : acc + cur), 0);;
}

console.log(sumNumBiggerThanN([34, 5, 71, 29, 100, 34], 123));
