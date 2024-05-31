// https://school.programmers.co.kr/learn/courses/30/lessons/181906
// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return

function solution(my_string: string, is_prefix: string): number {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}
