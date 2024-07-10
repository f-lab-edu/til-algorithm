// https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

// 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
// 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return

// bridge_length는 다리에 올라갈 수 있는 트럭 수 이면서 다리 길이
// 다리를 건너는 배열을 다리 길이만큼 원소 0을 넣어 만들기
// 다리를 건너는 배열의 길이가 0이 될 때까지 반복문 돌리기
// 대기 트럭이 있을 때
// - 최소 무게 트럭 넣어주기
// - 다리를 건너는 배열 길이가 다리에 올라갈 수 있는 트럭 수보다 클 때
//   - 다리를 건너는 배열 선입 선출

// - 다리에 올라간 트럭 무게의 합이 다리가 견딜 수 있는 무게보다 클 때 =>
// 대기 트럭이 없을 때
//
import _ from "lodash";
function solution(
  bridge_length: number,
  weight: number,
  truck_weights: number[]
): number {
  const bridge = Array(bridge_length).fill(0);
  const sortWeight = _.sortBy(truck_weights);
  let count = 0;

  while (bridge.length > 0) {
    bridge.shift();

    if (sortWeight.length > 0) {
      const bridgeOnTruckWeight = _.sum(bridge);
      const minTruckWeight = Math.min(...sortWeight);

      if (bridgeOnTruckWeight + minTruckWeight > weight) {
        bridge.push(0);
      } else {
        bridge.push(sortWeight.shift());
      }
    }
    count++;
  }

  return count;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(2, 10, [1, 2, 3, 5, 7, 8, 9]));
console.log(solution(4, 25, [10, 24, 13, 8, 5, 7]));
