// https://school.programmers.co.kr/learn/courses/30/lessons/147355
//숫자로 이루어진 문자열 t와 p가 주어질 때,
// t에서 p와 길이가 같은 부분문자열 중에서,

// 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return
function smallStr(t: string, p: string): number {
  let count = 0;
  const numP = Number(p)
  for (let i = 0; i <= t.length - p.length; i++) {
    const sliceStrToNum = Number(t.slice(i, i + p.length));
    if (sliceStrToNum <= numP) {
      count++;
    }
  }
  return count;
}

console.log(smallStr("3141592", "271"));
