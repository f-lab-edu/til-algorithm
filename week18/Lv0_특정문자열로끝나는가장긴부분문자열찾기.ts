// https://school.programmers.co.kr/learn/courses/30/lessons/181872
// 문자열 myString과 pat가 주어집니다. myString의 부분 문자열 중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return

function longestSubstring(myString: string, pat: string): string {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

console.log(longestSubstring("AbCdEFG", "dE"));
console.log(longestSubstring("AAAAaaaa", "a"));
