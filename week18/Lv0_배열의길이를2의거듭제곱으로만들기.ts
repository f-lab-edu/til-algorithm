// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다.
// arr에 최소한의 개수로 0을 추가한 배열을 return

function solution(arr: number[]): number[] {
  let powerLength = [];
  let prevX = 1;

  for (const x of power()) {
    if (arr.length <= x) {
      const minX = Math.min(
        Math.abs(arr.length - x),
        Math.abs(arr.length - prevX)
      );

      powerLength = Array(minX).fill(0);

      break;
    }
    prevX = x;
  }

  return arr.concat(powerLength);
}

function* power() {
  let count = 0;

  while (true) {
    yield 2 ** count;
    count++;
  }
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(solution([1]));
