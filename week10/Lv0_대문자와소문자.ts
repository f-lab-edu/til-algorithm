// https://school.programmers.co.kr/learn/courses/30/lessons/120893
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return

function convertUpperCaseAndLowerCase(my_string: string): string {
  return [...my_string]
    .map((str) =>
      str.toLocaleLowerCase() === str
        ? str.toLocaleUpperCase()
        : str.toLocaleLowerCase()
    )
    .join("");
}

console.log(convertUpperCaseAndLowerCase("abCdEfghIJ"));
