// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return

function discount(price: number): number {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }

  if (price >= 300000) {
    return Math.floor(price * 0.9);
  }

  if (price >= 100000) {
    return Math.floor(price * 0.95);
  }

  return price;
}

console.log(discount(50000));
console.log(discount(150000));
console.log(discount(350000));
console.log(discount(650000));
