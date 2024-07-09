// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어짐
// 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지
// ex) arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return

function removeConsecutiveNumbers(arr: number[]): number[] {
  return arr.filter((num, idx) => num !== arr[idx + 1]);
}

console.log(removeConsecutiveNumbers([1, 1, 3, 3, 0, 1, 1]));
console.log(removeConsecutiveNumbers([4,4,4,4,3,3,3]));
