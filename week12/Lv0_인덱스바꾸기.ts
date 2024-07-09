// https://school.programmers.co.kr/learn/courses/30/lessons/120895
//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return

function changeIdx(my_string: string, num1: number, num2: number): string {
  const strArray = [...my_string];
  [strArray[num1], strArray[num2]] = [my_string[num2], my_string[num1]];

  return strArray.join("");
}

console.log(changeIdx("hello", 1, 2));
console.log(changeIdx("I love you", 3, 6));
