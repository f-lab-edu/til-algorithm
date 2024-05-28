// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return

// 숫자 앞자리 크기 비교하여 큰 숫자를 앞으로 보내기
import assert from "assert";
function solution(numbers: number[]): string {
  const sortNumbers = _.sortBy(numbers);
  const modiNumbers: (string | number)[][] = sortNumbers.map((number) => {
    const a = number.toString().padEnd(4, "0");
    return [number, a];
  });

  console.log(modiNumbers);
  const map = new Map<number, string>(modiNumbers);

  if (map.size === 1) {
    return map.has(0) ? "0" : numbers.join("");
  }

  const sortMap = new Map<number, string>(
    modiNumbers.sort((a, b) => Number(b[1]) - Number(a[1]))
  );
  console.log(sortMap);

  return [...sortMap.keys()].join("");
}

// console.log(solution([3, 30, 34, 5, 9]));
// console.log(solution([3, 0, 3000, 3400, 205, 20, 50, 5, 9]));
// console.log(solution([0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution([1, 1, 1, 1, 1, 1]));
console.log(solution([1000, 111, 110, 101, 100, 11, 10, 1, 0]));
assert(
  solution([1000, 111, 110, 101, 100, 11, 10, 1, 0]) ===
    "1111111101011010010000"
);
