// https://school.programmers.co.kr/learn/courses/30/lessons/181926

// 문자열 control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 정수 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return

function controlNumbers(n: number, control: string): number {
  return [...control].reduce((acc, cur) => {
    switch (cur) {
      case "w":
        return acc + 1;
      case "s":
        return acc - 1;
      case "d":
        return acc + 10;
      case "a":
        return acc - 10;
      default:
        return acc;
    }
  }, n);
}

console.log(controlNumbers(0, "wsdawsdassw"));
