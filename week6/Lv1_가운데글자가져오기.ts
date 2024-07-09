// 단어 s의 가운데 글자를 반환
// 단어의 길이가 짝수라면 가운데 두글자를 반환

function middleLetter(s: string): string {
  const middleIdx = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.substring(middleIdx - 1, middleIdx + 1);
  }
  return s.charAt(middleIdx);
}

console.log(middleLetter("abcde"));
console.log(middleLetter("love"));
