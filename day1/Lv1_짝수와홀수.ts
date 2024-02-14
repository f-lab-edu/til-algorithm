// 정수 num이 짝수일 경우 "Even"을 반환
// 홀수인 경우 "Odd"를 반환

function evenOdd(num: number): string {
    let answer = num % 2 === 0 ? 'Even' : 'Odd';

    return answer;
}

console.log(evenOdd(6));
console.log(evenOdd(3));