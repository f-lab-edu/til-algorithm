// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이 < 다른 두 변의 길이의 합
// 매개변수 => 삼각형의 세 변의 길이가 담긴 배열 sides
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return
import _ from "lodash";

function triangle(sides: number[]): number {
  const sortedSides = _.sortBy(sides);

  return sortedSides[2] < sortedSides[0] + sortedSides[1] ? 1 : 2;
}

/** 
function solution(sides) {
    const max = Math.max(...sides);
    const other = sides.filter((num) => num !== max);
    const otherSum = other.reduce((acc, cur) => acc + cur, 0);

  return max < otherSum ? 1 : 2;
}

// 고친 풀이
function solution(sides) {
    const sortArray = sides.sort((a,b) => a-b);

    return sortArray[2] < sortArray[0] + sortArray[1] ? 1 : 2;

}
*/

console.log(triangle([1, 2, 3]));
console.log(triangle([3, 6, 2]));
console.log(triangle([199, 72, 222]));
console.log(triangle([3, 6, 6]));
