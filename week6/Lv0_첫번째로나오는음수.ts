// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return
// 음수가 없다면 -1을 return

function negativeNumber(num_list: number[]): number {
  return num_list.findIndex((num) => num < 0);
}

console.log(negativeNumber([12, 4, 15, 46, 38, -2, 15]));
console.log(negativeNumber([13, 22, 53, 24, 15, 6]));
