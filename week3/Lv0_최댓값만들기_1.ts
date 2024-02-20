//정수 배열 numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return
// 배열 오름차순, 끝에 두개 뽑아서 곱하기
import _ from 'lodash';

function multiplyMax(numbers: number[]): number {
  let sortNumbers = numbers.sort(function (a, b) {
    return b - a;
  });

  return sortNumbers[0] * sortNumbers[1];
}

function lodash_multiplyMax(numbers: number[]): number {
  let sortNumbers = _.orderBy(numbers, _, 'desc');

  return sortNumbers[0] * sortNumbers[1];
}

console.log(multiplyMax([1, 2, 3, 4, 5, 6]));
console.log(lodash_multiplyMax([1, 2, 3, 4, 5, 6]));
