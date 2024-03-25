// https://school.programmers.co.kr/learn/courses/30/lessons/181910
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return

function backStr(my_string: string, n: number): string {
  return my_string.slice(-n);
}

console.log(backStr("skgjlkjeijWrf34", 5));
