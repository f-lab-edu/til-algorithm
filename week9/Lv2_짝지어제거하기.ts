// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
// 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾아 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
// 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료
// 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환
// 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴
// 예를 들어, 문자열 S = baabaa 라면
// b aa baa → bb aa → aa →
// 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환

function removePair(s: string): number {
  const regex = /([a-z])\1/;

  //   console.log(regex.test(s));
  //   console.log(s.replace(regex, ""));
  if (s.length === 0) {
    return 1;
  }
  if (regex.test(s)) {
    s = s.replace(regex, "");
    return removePair(s);
  }
  return 0;
}

console.log(removePair("baabaa"));
console.log(removePair("cdcd"));
console.log(removePair("ccccddcaacvvvddv"));
console.log(removePair("cccvddv"));
