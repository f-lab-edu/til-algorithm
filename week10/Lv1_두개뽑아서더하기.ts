// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return

// 조합: 서로다른 두개의 수 뽑기, 순서 상관 X
// 중복된 수 제거
// 오름차순 정렬
import _ from "lodash";
function addPickNumber(numbers: number[]): number[] {
  const sumNumber = [];
  for (const x of combination(numbers, 2)) {
    sumNumber.push(_.sum(x));
  }

  return _.sortBy(_.uniq(sumNumber));
}

function* combination(numbers: number[], pick: number): Iterable<number[]> {
  if (pick === 0) {
    return yield [];
  }

  if (numbers.length === 0) {
    return;
  }

  const [head, ...tail] = numbers;

  yield* combination(tail, pick);

  for (const x of combination(tail, pick - 1)) {
    yield [head, ...x];
  }
}

console.log(addPickNumber([2, 1, 3, 4, 1]));
console.log(addPickNumber([1, 2, 3, 4, 5]));
console.log(addPickNumber([5, 0, 2, 7]));
