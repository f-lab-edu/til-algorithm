// 정수 배열 dot = [x, y]
// dot 배열의 길이 = 2, 원소에 0은 없음
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return

function quadrant(dot: number[]): number {
  if (dot[0] > 0) {
    if (dot[1] > 0) return 1;
    return 4;
  }
  if (dot[1] > 0) return 2;
  return 3;
}

// function quadrant(dot: number[]): number {
//   return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
// }

console.log(quadrant([2, 4]));
console.log(quadrant([-7, 4]));
console.log(quadrant([2, -6]));
console.log(quadrant([-3, -7]));
