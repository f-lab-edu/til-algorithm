// 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 위 작업을 몇 번이나 반복해야 하는지 반환
// 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환

function guess(num: number): number {
  let count = 0;

  while (num !== 1) {
    if (count === 500) {
      return -1;
    }

    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }

  return count;
}

console.log(guess(1));
console.log(guess(6));
console.log(guess(16));
console.log(guess(626331));
