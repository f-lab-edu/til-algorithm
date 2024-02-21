// 길이가 같은 자연수 배열 A, B
// 배열 길이만큼 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱하기 반복(뽑는 수는 중복 X)
// 두 수를 곱한 값을 누적하여 더하기
// 최종적으로 누적된 값이 최소가 되도록 만들기

function minAccNum(A: number[], B: number[]): number{
    const ascA = A.sort((a,b) => a - b);
    const descB = B.sort((a,b) => b - a);

    const multiplyArray = ascA.map((num, idx) => num * descB[idx]);

    return multiplyArray.reduce((acc, cur) => acc + cur, 0);
}

console.log(minAccNum([2, 4, 5], [5, 1, 7]));