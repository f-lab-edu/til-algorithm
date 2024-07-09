// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 푸드파이트 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다.
// 대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다.
// 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
// 이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양, 음식을 먹는 순서가 같아야 합니다. 이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.
// 예를 들어, 3가지의 음식이 준비되어 있으며, 칼로리가 적은 순서대로 1번 음식을 3개, 2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식이라고 칭한다면,
// 두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 "1223330333221"이 됩니다. 따라서 1번 음식 1개는 대회에 사용하지 못합니다.
// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return

function foodFighter(food: number[]): string {
  const onlyFood = food.slice(1);
  const foodPlacement = onlyFood.map((num, idx) => {
    const count = Math.floor(num / 2);
    const foodNum = String(idx + 1);
    return foodNum.repeat(count);
});
  return [...foodPlacement, 0, ...foodPlacement.reverse()].join("");
}

console.log(foodFighter([1, 3, 4, 6]));
console.log(foodFighter([1, 7, 1, 2]));
