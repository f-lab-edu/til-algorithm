function average(arr: number[]): number {
    let numPlus = 0;
    let answer: number;
    
    arr.forEach((num) => {
        numPlus += num;
    })

    answer = numPlus / arr.length;

    return answer;
}

console.log(average([1,2,3,4,5]));
