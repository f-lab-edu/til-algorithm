// https://school.programmers.co.kr/learn/courses/30/lessons/120890

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return

// array안의 수 - n을 해서 절댓값이 가장 작은 수를 return
function closeNumber(array: number[], n: number): number {
  return array.sort((a, b) => {
    const absA = Math.abs(a - n);
    const absB = Math.abs(b - n);

    if (absA === absB) {
      return a - b;
    }
    return absA - absB;
  })[0];
}

console.log(closeNumber([3, 10, 28], 20));
console.log(closeNumber([3, 10, 28, 12], 20));
