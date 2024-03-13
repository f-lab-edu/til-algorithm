// https://school.programmers.co.kr/learn/courses/30/lessons/12922
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴

function waterMelon(n: number): string {
  const word = "수박";

  return word.repeat(n / 2) + (n % 2 === 0 ? "" : word.at(0));
}

console.log(waterMelon(5));
console.log(waterMelon(3));
console.log(waterMelon(4));
