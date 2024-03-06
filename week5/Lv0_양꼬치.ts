// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줌
// 양꼬치는 1인분에 12,000원, 음료수는 2,000원
// 정수 n => 양꼬치 n인분, k => 음료수 k개
// 총얼마를 지불해야 하는지 return

function lambPrice(n: number, k: number): number {
  if (n < 10) {
    return 12000 * n + 2000 * k;
  }

  return 12000 * n + 2000 * (k - Math.floor(n / 10));
}

console.log(lambPrice(6, 4));
console.log(lambPrice(36, 4));