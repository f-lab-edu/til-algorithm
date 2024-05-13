// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
//이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
// 각 배포마다 몇 개의 기능이 배포되는지를 return

// 배포일 계산 (100 - progresses) / speeds
// 빈 배열을 만들고
// 배포일을 계산하여 앞의 배포일보다 짧거나 같으면 앞 작업의 배포일 + 1, 길면 현 작업의 배포일로 추가
// -> 이러면 더 앞의 배포일과 비교 불가 => 앞의 배포일보다는 길지만 더 앞의 배포일보다 짧으면 포함이 안됨
// -> 근데 뒤에 있는 기능이 앞에 있는 기능 보다 먼저 배포될 수는 없으므로 바로 앞의 배포일만 비교하면 될 듯
// Map으로 만들어서 비교?
// 배포일 배열 만들고 배열 안의 최댓값 구해서 현재 배포일과 비교하기?
function solution(progresses: number[], speeds: number[]): number[] {
  const distribute: number[] = [];
  let prevWorkingDay = 0;

  progresses.forEach((x, idx) => {
    const workingDay = Math.ceil((100 - x) / speeds[idx]);

    // 빈 배열이거나 현재 배포일이 앞 작업의 배포일보다 길 때
    if (distribute.length === 0 || prevWorkingDay < workingDay) {
      distribute.push(1);
      prevWorkingDay = workingDay;
    } else {
      // 현재 배포일이 앞 작업의 배포일보다 짧거나 같을 때
      distribute[distribute.length - 1] += 1;
    }
  });

  return distribute;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
