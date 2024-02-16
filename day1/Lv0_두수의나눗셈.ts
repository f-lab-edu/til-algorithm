// 나눈 값의 1000을 곱한 후 정수 부분 return

function division(num1: number, num2: number): number {
    let divide = num1 / num2;

    return Math.trunc(divide * 1000);
}

console.log(division(3,2));
console.log(division(7,3));