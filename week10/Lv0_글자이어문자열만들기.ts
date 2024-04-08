// https://school.programmers.co.kr/learn/courses/30/lessons/181915
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다.
// my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return

function joiningString(my_string: string, index_list: number[]): string {
  return index_list.map((num) => my_string[num]).join("");
}

console.log(
  joiningString("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
