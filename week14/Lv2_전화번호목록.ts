// https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript
// 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
// 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.
// 구조대 : 119
// 박준영 : 97 674 223
// 지영석 : 11 9552 4421
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때,
// 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return

function phoneNumberList(phone_book: string[]): boolean {
  const map = new Map();
  const sortNumber = phone_book.sort((a, b) => a.length - b.length);
  const cutLength: number[] = [];

  for (const number of sortNumber) {
    if (!cutLength.includes(number.length)) {
      cutLength.push(number.length);
    }

    for (const cut of cutLength) {
      if (map.has(number.slice(0, cut))) {
        map.set(number, false);
        break;
      }
    }
    if (map.has(number)) {
      break;
    } else {
      map.set(number, true);
    }
  }

  return !Object.values(Object.fromEntries(map)).includes(false);
}

console.log(phoneNumberList(["119", "97672", "1195524"]));
console.log(phoneNumberList(["123", "1235", "567", "12", "88"]));
console.log(phoneNumberList(["12", "1345", "567", "134", "88"]));
console.log(phoneNumberList(["123", "456", "789"]));
