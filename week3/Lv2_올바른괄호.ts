// 올바른 괄호 = '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 함
// '(' 또는 ')' 로만 이루어진 문자열 s
// 문자열 s가 올바른 괄호이면 true를 return, 올바르지 않은 괄호이면 false를 return

function correctBracket(s: string): boolean {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(correctBracket("((()))"));
console.log(correctBracket(")()()("));
