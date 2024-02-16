function averageOfArray(numbers: number[]): number {
    let average = 0;

    numbers.forEach((num) => {
        average += num;
    })

    return average / numbers.length;
}

console.log(averageOfArray([2, 6, 7, 8, 12]))
console.log(averageOfArray([2, 6, 7, 8, 12, 24, 25]))