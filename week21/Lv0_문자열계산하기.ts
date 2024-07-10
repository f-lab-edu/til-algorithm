// https://school.programmers.co.kr/learn/courses/30/lessons/120902

// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return

function solution(my_string: string): number {
  const xs = my_string.split(" ");
  let x = 0;

  for (let i = 0; i < xs.length; i += 2) {
    const y = Number(xs[i]);
    const operator = xs[i - 1];

    if (i === 0) {
      x = y;
    } else {
      if (operator === "+") {
        x += y;
      }
      if (operator === "-") {
        x -= y;
      }
    }
  }
  return x;
}

console.log(solution("3 + 4"));
