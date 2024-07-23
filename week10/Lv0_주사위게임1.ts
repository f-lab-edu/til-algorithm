// https://school.programmers.co.kr/learn/courses/30/lessons/181839
// 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.
// a와 b가 모두 홀수라면 a^ + b^ 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
// 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return

function judgingOddNumbers(a: number, b: number): number {
  const isAOdd = a % 2 === 1;
  const isBOdd = b % 2 === 1;

  if (isAOdd && isBOdd) {
    return Math.pow(a, 2) + Math.pow(b, 2);
  }

  if (!isAOdd && !isBOdd) {
    return Math.abs(a - b);
  }

  return 2 * (a + b);
}

console.log(judgingOddNumbers(3,5));
console.log(judgingOddNumbers(6,1));
console.log(judgingOddNumbers(2,4));
