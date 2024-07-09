// a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] (n은 a, b의 길이)
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return

function dotProduct(a: number[], b: number[]): number {
    return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

console.log(dotProduct([1,2,3,4],[-3,-1,0,2]));
console.log(dotProduct([-1,0,1], [1,0,-1]));
