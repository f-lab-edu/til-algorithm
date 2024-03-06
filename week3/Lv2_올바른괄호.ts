// 올바른 괄호 = '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 함
// '(' 또는 ')' 로만 이루어진 문자열 s
// 문자열 s가 올바른 괄호이면 true를 return, 올바르지 않은 괄호이면 false를 return

function correctBracket(s: string): boolean {
  const stack = [];

  // for (let i = 0; i < s.length; i++) {
  //   stack.push(s[i]);

  //   if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
  //     stack.pop();
  //     stack.pop();
  //   }
  // }

  // return stack.length === 0;

  // 해보기
  for (const i of s) {
    if (i === "(") {
      // TODO:
      stack.push(i);
    } else {
      if(stack.length === 0) {
        return false;
      }
      // TODO:
      if (stack.at(-1) === "(") {
        stack.pop();
      }
    }

    // 괄호를 `stack`에 하나씩 넣으면서
    // 열린 괄호 다음에 닫힌 괄호가 있으면
    // 그 두 괄호를 빼준다.
  }
  // 결과적으로 `stack`의 길이가
  return stack.length === 0;
}

console.log(correctBracket("((()))"));
console.log(correctBracket(")()()("));
