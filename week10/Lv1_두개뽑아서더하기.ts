// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return

// 조합: 서로다른 두개의 수 뽑기, 순서 상관 X
// 중복된 수 제거
// 오름차순 정렬
import _ from "lodash";
function addPickNumber(numbers: number[]): number[] {
  const list: number[] = [];
  for (const a of combination(numbers, 3)) {
    const sum = _.sum(a);
    if (list.every((num) => num !== sum)) {
      list.push(sum);
    }
  }
  return _.sortBy(list);
}

function* combination(numbers: number[], pick: number): number[][] {
  if (pick === 1) {
    for (const i of numbers) {
      yield [i];
    }
    return;
  }

  for (let i = 0; i <= numbers.length - pick; i++) {
    //console.log(i);
    for (const c of combination(numbers.slice(i + 1), pick - 1)) {
      //console.log(numbers[i], c);
      yield [numbers[i], ...c];
    }
  }
}

console.log(addPickNumber([2, 1, 3, 4, 1]));
//console.log(addPickNumber([1, 2, 3, 4, 5]));
//console.log(addPickNumber([5, 0, 2, 7]));
