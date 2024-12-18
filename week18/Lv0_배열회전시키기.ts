// https://school.programmers.co.kr/learn/courses/30/lessons/120844
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return

function rotateArray(numbers: number[], direction: string): number[] {
  if (direction === "left") {
    numbers.push(numbers.shift() as number);
  } else {
    numbers.unshift(numbers.pop() as number);
  }

  return numbers;
}

console.log(rotateArray([1, 2, 3, 4, 5], "left"));
console.log(rotateArray([1, 2, 3, 4, 5], "right"));
