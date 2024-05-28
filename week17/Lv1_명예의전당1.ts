// https://school.programmers.co.kr/learn/courses/30/lessons/138477
//명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return

import _ from "lodash";
function hallOfFame(k: number, score: number[]): number[] {
  const lowestRank = [];
  const dailyScore = [];

  for (const num of score) {
    dailyScore.push(num);
    if (dailyScore.length > k) {
      dailyScore.splice(dailyScore.indexOf(Math.min(...dailyScore)), 1);
    }
    lowestRank.push(Math.min(...dailyScore));
  }
  
  return lowestRank;
}

console.log(hallOfFame(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(hallOfFame(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
