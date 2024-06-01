// https://school.programmers.co.kr/learn/courses/30/lessons/181908
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return

function isSuffix(my_string: string, is_suffix: string): number {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
