// numbers의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return
import _ from "lodash";

function sliceNumList(numbers: number[], num1: number, num2: number): number[] {
    return numbers.slice(num1, num2+1);
}

function lodash_sliceNumList(numbers: number[], num1: number, num2: number): number[] {
    return _.slice(numbers, num1, num2+1);
}

console.log(sliceNumList([1,2,3,4,5,6,7,8,9,10], 3, 7));
console.log(lodash_sliceNumList([1,2,3,4,5,6,7,8,9,10], 3, 7));