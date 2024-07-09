// https://school.programmers.co.kr/learn/courses/30/lessons/12982
// 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 함
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원
// 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
// d: 부서별로 신청한 금액이 들어있는 배열,  budget: 예산
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

import _ from "lodash";
function MaximumBudgetSupport(d: number[], budget: number): number {
  const sortedD = _.sortBy(d);
  let remainingBudget = budget;
  let count = 0;

  for (let i = 0; i < sortedD.length; i++) {
    remainingBudget -= sortedD[i];
    if (remainingBudget >= 0) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

console.log(MaximumBudgetSupport([1, 2, 1, 1, 7, 1, 1, 2, 1], 8));
console.log(MaximumBudgetSupport([1, 3, 2, 5, 4], 9));
console.log(MaximumBudgetSupport([2, 2, 3, 3], 10));
console.log(MaximumBudgetSupport([2, 2, 5, 3, 1, 1, 1, 2], 15));
