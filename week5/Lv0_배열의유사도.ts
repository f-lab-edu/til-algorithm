// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return

function similarity(s1: string[], s2: string[]): number {
  return s1.filter((str1) => s2.includes(str1)).length;
}

console.log(similarity(["a", "b", "c"], ["a", "c", "b"]));
console.log(similarity(["kim", "lee", "park"], ["seo", "choi", "kim", "lee"]));
