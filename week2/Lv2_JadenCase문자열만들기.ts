//JadenCase란 모든 단어의 첫 문자가 대문자, 그 외의 알파벳은 소문자인 문자열
//문자열 s를 JadenCase로 바꾼 문자열을 리턴

function jadenCase(s: string): string {
  let strArray: string[] = [];
  let answer: string = "";
  const answerArray: string[] = [];

  strArray = s.split(" ");

  strArray.forEach((word) => {
    const first = word.charAt(0).toUpperCase();
    const other = word.slice(1).toLowerCase();

    word = first + other;

    answerArray.push(word);
  });

  answer = answerArray.join(" ");

  return answer;
}

console.log(jadenCase("3people unFollowed me"));
console.log(jadenCase("for the last week"));
