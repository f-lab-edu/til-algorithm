// https://school.programmers.co.kr/learn/courses/30/lessons/181838
// 정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다.
// 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return

function solution(date1: number[], date2: number[]): number {
  for (let i = 0; i < date1.length; i++) {
    if (date1[i] < date2[i]) {
      console.log("일");
      return 1;
    } else if (date1[i] > date2[i]) {
      break;
    }
    console.log("이");
  }
  console.log("삼");
  return 0;
}

function solution2(date1: number[], date2: number[]): number {
  const [year1, month1, day1] = date1;
  const [year2, month2, day2] = date2;

  return new Date(year1, month1, day1) < new Date(year2, month2, day2) ? 1 : 0;
}
console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
