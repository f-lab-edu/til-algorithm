// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어짐
// 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", function (line: string) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  const str1 = input[0];
  const str2 = input[1];
  console.log(str1.concat(str2));
});
