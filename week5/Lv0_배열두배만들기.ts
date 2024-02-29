// numbers의 각 원소에 두배한 원소를 가진 배열을 return

function doubleArray(numbers: number[]): number[] {
  return numbers.map((num) => num + num);
}

console.log(doubleArray([2, 5, 7, 8]));
