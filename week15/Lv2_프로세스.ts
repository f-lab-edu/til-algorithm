// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

// 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
// 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

// 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와,
// 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return

// 큐는 선입선출
// priorities을 돌면서 남은 배열의 가장 큰값과 비교하여 현재 값이 제일 크면 배열에서 빼주고, 아니면 다시 배열에 넣어준다.
function solution(priorities: number[], location: number): number {
  const locations: number[] = [];
  let executionOrder = 0;

  for (let i = 0; i < priorities.length; i++) {
    locations.push(i);
  }

  while (priorities.length > 0) {
    console.log(priorities, locations);
    const [x, ...tail] = priorities;
    const y = locations[0];

    if (x >= Math.max(...tail)) {
      priorities.shift();
      executionOrder++;
      //console.log(executionOrder)
      if (y === location) {
        break;
      }
    } else {
      tail.push(x);
      priorities = tail;
    }

    locations.shift();
    locations.push(y);
  }

  return executionOrder;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
console.log(solution([1, 3, 1, 2, 1], 2));

/** 
function solution(priorities: number[], location: number): number {
    const process = [];
  
    while (priorities.length > 0) {
      console.log(priorities)
      const [x, ...tail] = priorities;
  
      if (x >= Math.max(...tail)) {
        process.push(x);
        priorities.shift();
      } else {
        tail.push(x);
        priorities = tail;
      }
    }
  
    console.log(process);
  }
  */
