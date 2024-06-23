// https://school.programmers.co.kr/learn/courses/30/lessons/181837

// 팀의 막내인 철수는 아메리카노와 카페 라테만 판매하는 카페에서 팀원들의 커피를 사려고 합니다.
// 아메리카노와 카페 라테의 가격은 차가운 것과 뜨거운 것 상관없이 각각 4500, 5000원입니다. 각 팀원에게 마실 메뉴를 적어달라고 하였고,
// 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 "아무거나"를 적은 팀원의 것은 차가운 아메리카노로 통일하기로 하였습니다.
// 각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return

import _ from "lodash";
function solution(orders: string[]): number {
  const coffeePrices = orders.map((order) => {
    if (order.includes("americano") || order.includes("anything")) {
      return 4500;
    }
    if (order.includes("cafelatte")) {
      return 5000;
    }
  });

  return _.sum(coffeePrices);
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
