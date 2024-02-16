// 현재 년도를 기준으로 출생 연도 return
// 현재 년도 = 2022

function yearOfBirth(age: number): number {
    const THIS_YEAR = 2022;
    const ONE_YEAR = 1;

    return THIS_YEAR - age + ONE_YEAR;;
}

console.log(yearOfBirth(40));
console.log(yearOfBirth(23));