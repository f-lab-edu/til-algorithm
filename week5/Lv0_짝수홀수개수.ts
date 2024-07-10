// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return

function evenOddCount(num_list: number[]): number[] {
  const even = num_list.filter((num) => num % 2 === 0).length;
  const odd = num_list.filter((num) => num % 2 !== 0).length;

  return [even, odd];
}

console.log(evenOddCount([1, 2, 3, 4, 5, 6, 7]));
console.log(evenOddCount([2, 6, 3, 9, 10, 24, 6, 17]));
