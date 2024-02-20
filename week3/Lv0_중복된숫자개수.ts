// array에 n이 몇 개 있는 지를 return
import _ from 'lodash';

function duplicationNumCount(array: number[], n: number): number {
  return array.filter((num) => num === n).length;
}

function lodash_duplicationNumCount(array: number[], n: number): number {
  return _.filter(array, (num) => num === n).length;
}
console.log(duplicationNumCount([1, 1, 2, 3, 4, 7, 1, 5], 1));
console.log(lodash_duplicationNumCount([1, 1, 2, 3, 4, 7, 1, 5], 1));
