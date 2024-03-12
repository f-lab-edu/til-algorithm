// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환
// 리턴 값 => [최대공약수,최소공배수]

/** 
function GCDLCM(n: number, m: number): number[] {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  let GCD = 1;

  for (let i = min; i > 0; i--) {
    console.log(i);
    if (n % i === 0 && m % i === 0) {
      GCD = i;
      break;
    }
  }

  const LCM = max % min === 0 ? max : (max * min) / GCD;

  return [GCD, LCM];
}
*/

function GCDLCM(n: number, m: number): number[] {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  const GCD = gcd(max, min);

  const LCM = max % min === 0 ? max : (max * min) / GCD;

  return [GCD, LCM];
}

function gcd(a: number, b: number): number {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

console.log(GCDLCM(2, 5));
console.log(GCDLCM(8, 12));
console.log(GCDLCM(30, 10));
