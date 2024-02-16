// n 이하의 짝수의 합 return 

function evenSum(n: number): number {
    let answer = 0;

    for(let num = 0; num <= n; num++) {
        if(num % 2 === 0) {
            answer += num;
        }
    }

    return answer;
}

console.log(evenSum(20));
console.log(evenSum(17));
