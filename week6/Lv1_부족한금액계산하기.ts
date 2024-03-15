// https://school.programmers.co.kr/learn/courses/30/lessons/82612
// 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 함
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return
// 단, 금액이 부족하지 않으면 0을 return

function shortOfMoney(price: number, money: number, count: number): number {
  const totalPrice = (count * (2 * price + (count - 1) * price)) / 2;

  return money < totalPrice ? totalPrice - money : 0;
}

console.log(shortOfMoney(3, 20, 4));
