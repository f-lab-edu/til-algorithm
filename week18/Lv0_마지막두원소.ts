// https://school.programmers.co.kr/learn/courses/30/lessons/181927
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return

function compareLastTwoNumbers(num_list: number[]): number[] {
  const lastNum = num_list.at(-1)!;
  const prevNum = num_list.at(-2)!;

  if (lastNum > prevNum) {
    num_list.push(lastNum - prevNum);
  } else {
    num_list.push(lastNum * 2);
  }

  return num_list;
}
