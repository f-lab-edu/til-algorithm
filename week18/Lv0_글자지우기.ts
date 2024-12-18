// https://school.programmers.co.kr/learn/courses/30/lessons/181900
// 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return

function removeStr(my_string: string, indices: number[]): string {
  return [...my_string].filter((_, i) => !indices.includes(i)).join("");
}

console.log(removeStr("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
