// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴

function hidePhoneNumber(phone_number: string): string {
  const hideNumArray = [...phone_number].map((num, idx) =>
    idx < phone_number.length - 4 ? "*" : num
  );

  return hideNumArray.join("");
}

console.log(hidePhoneNumber("01033334444"));
console.log(hidePhoneNumber("027778888"));
