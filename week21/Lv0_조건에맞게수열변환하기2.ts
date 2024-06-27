// https://school.programmers.co.kr/learn/courses/30/lessons/181881

// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
// 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다.
//  이러한 x 중 가장 작은 값을 return
// 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.

// 50이상 && 짝수 => / 2 , 50미만 && 홀수 => * 2 + 1
// 50이상 && 홀수 => 그대로, 50미만 && 짝수 => 그대로
// 배열의 원소가 50이상 && 홀수이거나 50미만 && 짝수로만 되어있을 때 arr(x) = arr(x + 1) 됨
// while문으로 위 조건에 맞을 때까지 작업 반복
function solution(arr: number[]): number {
  let count = 0;
  let x = [...arr];
  const isEvenNumOver50 = (num: number): boolean => {
    return num >= 50 && num % 2 === 0;
  };
  const isOddNumUnder50 = (num: number): boolean => {
    return num < 50 && num % 2 !== 0;
  };

  while (true) {
    // arr이 조건에 맞는지 확인, 맞으면 while문 종료 아니면 arr 작업
    if (x.every((num) => !(isEvenNumOver50(num) || isOddNumUnder50(num)))) {
      break;
    }

    // arr 작업
    x = x.map((num) => {
      if (isEvenNumOver50(num)) {
        return num / 2;
      }
      if (isOddNumUnder50(num)) {
        return num * 2 + 1;
      }
      return num;
    });

    count++;
  }

  return count;
}

console.log(solution([1, 2, 54, 53]));
