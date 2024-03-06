// 글자 한 자 한 자를 가로 2cm 크기, 편지를 가로로만 적을 때,
// 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return
// message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있음

function letter(message: string): number {
  return message.length * 2;
}

console.log(letter("happy birthday!"));
console.log(letter("i love you~~!"));
