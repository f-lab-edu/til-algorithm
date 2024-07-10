// https://school.programmers.co.kr/learn/courses/30/lessons/181894

// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return
// 단, arr에 2가 없는 경우 [-1]을 return

function areaOfTwo(arr: number[]): number[] {
  const NUMBER = 2;
  const start = arr.indexOf(NUMBER);
  const end = arr.lastIndexOf(NUMBER);

  return start === -1 || end === -1 ? [-1] : arr.slice(start, end + 1);
}

console.log(areaOfTwo([1, 2, 1, 4, 5, 2, 9]));
console.log(areaOfTwo([1, 9]));
console.log(areaOfTwo([1, 2, 1, 2, 5, 2, 9]));
console.log(areaOfTwo([1, 2, 1]));
