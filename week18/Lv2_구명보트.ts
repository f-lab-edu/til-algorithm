// https://school.programmers.co.kr/learn/courses/30/lessons/42885

// 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
// 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만
// 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
// 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return

// 최대 2명 타기 가능
// 한명 탄 후 배열을 돌며 남는 무게 중 가장 무거운 사람이 타기
function lifeboat(people: number[], limit: number): number {
  let count = 0;

  while (people.length > 0) {
    const passengerWeight = people.shift()!;
    const x = people.filter((weight) => weight <= limit - passengerWeight);

    if (x.length) {
      people.splice(people.indexOf(Math.max(...x), 1));
    }

    count++;
  }

  return count;
}

console.log(lifeboat([70, 50, 80, 50], 100));
console.log(lifeboat([70, 80, 50], 100));
console.log(lifeboat([70, 80, 20, 30], 100));
