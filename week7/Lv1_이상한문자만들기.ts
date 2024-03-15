// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 문자열 s는 한 개 이상의 단어로 구성
// 각 단어는 하나 이상의 공백문자로 구분되어 있다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴

function strangeString(s: string): string {
  const wordArr = s.split(" ");
  const changeArr = wordArr.map((word) => {
    return [...word]
      .map((str, idx) =>
        (idx + 1) % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
      )
      .join("");
  });

  return changeArr.join(" ");
}

console.log(strangeString("try hello world"));
