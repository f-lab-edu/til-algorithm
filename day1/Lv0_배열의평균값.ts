function averageOfArray(numbers: number[]): number {
    let average = 0;
    let answer;

    numbers.forEach((num) => {
        average += num;
    })

    answer = average / numbers.length;

    return answer;
}

console.log(averageOfArray([2, 6, 7, 8, 12]))
console.log(averageOfArray([2, 6, 7, 8, 12, 24, 25]))