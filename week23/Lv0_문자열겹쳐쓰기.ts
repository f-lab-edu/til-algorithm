// https://school.programmers.co.kr/learn/courses/30/lessons/181943

// 문자열 my_string, overwrite_string과 정수 s가 주어집니다.
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return

// my_string의 인덱스 s부터 overwrite_string로 바꾸기

function solution(
  my_string: string,
  overwrite_string: string,
  s: number
): string {
  const xs = [...my_string];
  xs.splice(s, overwrite_string.length, overwrite_string);

  return xs.join("");

  //   return (
  //     my_string.substring(0, s) +
  //     overwrite_string +
  //     my_string.substring(s + overwrite_string.length)
  //   );
}

console.log(solution("He11oWor1d", "lloWorl", 2));
console.log(solution("Program29b8UYP", "merS123", 7));
