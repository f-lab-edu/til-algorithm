// https://school.programmers.co.kr/learn/courses/30/lessons/181904
// 문자열 my_string과 두 정수 m, c
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return

function vertical(my_string: string, m: number, c: number): string {
  //   const newStrArr = _.chunk(my_string, m);
  //   console.log(newStrArr);
  //   const newStr = newStrArr.map((str) => str[c - 1]);

  //   return newStr.join("");

  return [...my_string].filter((_, idx) => idx % m === c - 1).join("");
}

console.log(vertical("ihrhbakrfpndopljhygc", 4, 2));
