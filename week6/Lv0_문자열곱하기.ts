// https://school.programmers.co.kr/learn/courses/30/lessons/181940
// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return

function stringRepeat(my_string: string, k: number): string {
  return my_string.repeat(k);
}

console.log(stringRepeat("string", 3));
