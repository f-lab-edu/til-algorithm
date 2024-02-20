//피자 한 판 = 7조각, 피자를 나눠먹을 사람의 수 = n
//모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return
import _ from "lodash";

function sharePizza(n: number): number {
    return Math.ceil(n / 7);
}

function lodash_sharePizza(n: number): number {
    return _.ceil(n / 7);
}

console.log(sharePizza(29));
console.log(lodash_sharePizza(29));