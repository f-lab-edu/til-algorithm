// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return

function bigNumber(n: number): number {
  const countOne = (num: number) => {
    return num.toString(2).match(/1/g)?.length;
  };
  let bigNum = n + 1;

  while (countOne(n) !== countOne(bigNum)) {
    bigNum++;
  }

  return bigNum;
}

console.log(bigNumber(78));
