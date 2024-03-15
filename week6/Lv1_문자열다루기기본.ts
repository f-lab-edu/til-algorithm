// https://school.programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴

function string(s: string): boolean {
  return /^\d{4}$|^\d{6}$/.test(s);
}

console.log(string("a234"));
console.log(string("1234"));
console.log(string("10e1"));
console.log(string("12"));
console.log(string("a2345g"));
console.log(string("2fs3"));
