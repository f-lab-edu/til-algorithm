// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b,
// 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다.
// 상빈이가 받을 수 있는 콜라의 병 수를 return

// 받는 병 수  = b * (n / a)
// 남은 콜라 수 = 받는 병 수 + n - (n / a)
function solution(a: number, b: number, n: number): number {
  let receivedCoke = 0;

  while (true) {
    if (Math.floor(n / a) === 0) {
      break;
    } else {
      const exchangeCoke = b * Math.floor(n / a);
      receivedCoke += exchangeCoke;
      n = exchangeCoke + (n % a);
    }
  }

  return receivedCoke;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
