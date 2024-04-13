// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 아이언 슈트 이동방법
// - 한번에 k칸 점프 => 건전지 사용량 : k
// - 순간 이동(현재까지 온 거리 * 2에 해당하는 위치) => 건전지 사용량: 0
// 아이언 슈트를 착용하고 거리가 N 만큼 떨어져 있는 장소로 가려고 할 때, 건전지 사용량을 줄이기 위해 점프로 이동하는 것은 최소로 하려고 합니다.
// 아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 사용해야 하는 건전지 사용량의 최솟값을 return

function minimumBatteryUsage(n: number): number {
  let count = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    } else {
      n = Math.floor((n - 1) / 2);
      count++;
    }
  }

  return count;
}

console.log(minimumBatteryUsage(5));
console.log(minimumBatteryUsage(6));
console.log(minimumBatteryUsage(5000));
