// https://school.programmers.co.kr/learn/courses/30/lessons/181836

// 직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
// 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때,
// 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return

// 각 원소와 원소안의 문자열들이 k배씩 늘어나야 함.

function solution(picture: string[], k: number): string[] {
  return picture.reduce((xs: string[], pixel: string) => {
    xs.push(...Array(k).fill([...pixel].map((str) => str.repeat(k)).join("")));
    return xs;
  }, []);
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);

/** 결과
[
  "..xxxx......xxxx..",
  "..xxxx......xxxx..",
  "xx....xx..xx....xx",
  "xx....xx..xx....xx",
  "xx......xx......xx",
  "xx......xx......xx",
  "..xx..........xx..",
  "..xx..........xx..",
  "....xx......xx....",
  "....xx......xx....",
  "......xx..xx......",
  "......xx..xx......",
  "........xx........",
  "........xx........",
]
 */
