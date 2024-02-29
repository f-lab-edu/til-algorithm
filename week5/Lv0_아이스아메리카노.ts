// 아이스 아메리카노는 한잔에 5,500원
// 머쓱이가 가지고 있는 돈 = money
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return

function iceAmericano(money: number): number[] {
  if (money >= 5500) {
    const numberOfGlasses = Math.floor(money / 5500);
    const changes = money % 5500;

    return [numberOfGlasses, changes];
  }

  return [0, money];
}

console.log(iceAmericano(4500));
console.log(iceAmericano(26000));
