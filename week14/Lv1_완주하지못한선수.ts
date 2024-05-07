// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return

function failedToFinish(participants: string[], completions: string[]): string {
  const map = new Map();

  for (const participant of participants) {
    if (map.has(participant)) {
      map.set(participant, map.get(participant) + 1);
    } else {
      map.set(participant, 1);
    }
  }

  for (const completion of completions) {
    if (map.get(completion) > 1) {
      map.set(completion, map.get(completion) - 1);
    } else {
      map.delete(completion);
    }
  }

  return Object.keys(Object.fromEntries(map)).toString();
}

console.log(
  failedToFinish(
    ["mislav", "stanko", "mislav", "ana"],
    ["stanko", "ana", "mislav"]
  )
);
