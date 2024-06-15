// https://school.programmers.co.kr/learn/courses/30/lessons/120912

// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return

function solution(array: number[]): number {
  let count = 0;
  
  for (const x of array.join("")) {
    if (x === "7") {
      count++;
    }
  }
  return count;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
