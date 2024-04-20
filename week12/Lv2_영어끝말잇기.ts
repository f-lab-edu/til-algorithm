// https://school.programmers.co.kr/learn/courses/30/lessons/12981

// 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.
// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.

// 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때,
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return
// 정답은 [ 번호, 차례 ] 형태로 return
// 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return

// 사람 수와 단어 배열이 매개변수로 주어짐
// 리턴 값은 [탈락한 사람의 번호, 그 사람이 탈락한 차례]
// 배열을 돌며 이전 단어와 현재단어를 비교해야함
// n개마다 배열을 끊어서 차례를 알아야함

// 스택활용?
// 조건에 맞으면 배열에 넣어가고 아니면 끝내는
// 넣어진 배열의 몫과 나머지를 구하면 됨
function wordChain(n: number, words: string[]): number[] {
  const passWords = [words[0]];

  for (const word of words.slice(1)) {
    const compareWord = passWords[passWords.length - 1];

    if (
      word.startsWith(compareWord[compareWord.length - 1]) &&
      !passWords.includes(word)
    ) {
      passWords.push(word);
    } else {
      break;
    }
  }

  return passWords.length === words.length
    ? [0, 0]
    : [(passWords.length % n) + 1, Math.floor(passWords.length / n) + 1];
}

console.log(
  wordChain(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

console.log(
  wordChain(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
