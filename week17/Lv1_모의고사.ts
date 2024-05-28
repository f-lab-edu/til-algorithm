// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return

// 1번 12345 반복
// 2번 2 (12345) 반복
// 3번 33 11 22 44 55 반복
function mockExam(answers: number[]): number[] {
  const correctCount = [0, 0, 0];
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const highGrades: number[] = [];

  answers.forEach((answer, idx) => {
    if (answer === answer1[idx % 5]) {
      correctCount[0]++;
    }
    if (answer === answer2[idx % 8]) {
      correctCount[1]++;
    }
    if (answer === answer3[idx % 10]) {
      correctCount[2]++;
    }
  });

  correctCount.forEach((count, idx) => {
    if (count === Math.max(...correctCount)) {
      highGrades.push(idx + 1);
    }
  });

  return highGrades;
}

console.log(mockExam([1, 2, 3, 4, 5]));
console.log(mockExam([1, 3, 2, 4, 2]));
