// 문자열 str1, str2가 매개변수로 주어짐.
// str1 안에 str2가 있다면 1을 없다면 2를 return

function stringWithinString(str1: string, str2: string): number {
  return str1.includes(str2) ? 1 : 2;
}

console.log(stringWithinString("applebanana", "apple"));
