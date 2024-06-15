// https://school.programmers.co.kr/learn/courses/30/lessons/181880

// 정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.
// 10 / 2 = 5
// (5 - 1) / 2 = 2
// 2 / 2 = 1
// 위와 같이 3번의 나누기 연산으로 1이 되었습니다.
// 정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return

function solution(num_list: number[]): number {
  let count = 0;

  for (let x of num_list) {
    while (x !== 1) {
      console.log(x);
      count++;
      if (x % 2 === 0) {
        x = x / 2;
      } else {
        x = (x - 1) / 2;
      }
    }
  }

  return count;
}

console.log(solution([12, 4, 15, 1, 14]));
