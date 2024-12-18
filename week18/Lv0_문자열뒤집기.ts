// https://school.programmers.co.kr/learn/courses/30/lessons/181905
// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return

function reverseString(my_string: string, s: number, e: number): string {
  const x = [...my_string];
  x.splice(s, e - s + 1, ...[...my_string.substring(s, e + 1)].reverse());

  return x.join("");
}

console.log(reverseString("Progra21Sremm3", 6, 12));
