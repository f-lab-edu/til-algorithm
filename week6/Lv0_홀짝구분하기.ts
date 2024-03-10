// https://school.programmers.co.kr/learn/courses/30/lessons/181944
// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: number;

rl.on("line", function (line: string) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  const n = input % 2 === 0 ? input + " is even" : input + " is odd";
  console.log(n);
});
