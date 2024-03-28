//https://school.programmers.co.kr/learn/courses/30/lessons/120892
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return
// cipher는 소문자와 공백으로만 구성되어 있습니다, 공백도 하나의 문자로 취급

function decryption(cipher: string, code: number): string {
  return [...cipher].filter((_, idx) => (idx + 1) % code === 0).join("");
}

console.log(decryption("dfjardstddetckdaccccdegk", 4));
console.log(decryption("pfqallllabwaoclk", 2));
