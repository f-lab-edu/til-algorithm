// https://school.programmers.co.kr/learn/courses/30/lessons/181850
// 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return

function integerPart(flo: number): number {
  return Math.floor(flo);
}

console.log(integerPart(1.76));
console.log(integerPart(69.42));

