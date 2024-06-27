// https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return

function sliceByStrLength(my_str: string, n: number): string[] {
  const xs = [];
  for (let i = 0; i < my_str.length; i += n) {
    xs.push(my_str.substring(i, i + n));
  }

  return xs;
}

console.log(sliceByStrLength("abc1Addfggg4556b", 6));
