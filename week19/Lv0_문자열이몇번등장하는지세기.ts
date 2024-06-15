// https://school.programmers.co.kr/learn/courses/30/lessons/181871

// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return

function solution(myString: string, pat: string): number {
  let count = 0;

  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  return count;
}

console.log(solution("banana", "ana"));
console.log(solution("aaaa", "aa"));
