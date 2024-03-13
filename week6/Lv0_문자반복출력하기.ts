// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return

function repeatString(my_string: string, n: number): string {
  return [...my_string].map((str) => str.repeat(n)).join("");
}

console.log(repeatString("hello", 4));
