// 피자 = 2 ~ 10 조각
// 피자 조각 수 = slice, 피자를 먹는 사람의 수 = n
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return
import _ from "lodash";

function sharePizza_3(slice: number, n: number): number {
    return Math.ceil(n / slice);
}

function lodash_sharePizza_3(slice: number, n: number): number {
    return _.ceil(n / slice);
}

console.log(sharePizza_3(4, 17));
console.log(lodash_sharePizza_3(4, 17));