// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number
// 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 함
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return
// 서로 다른 학생의 정수 번호가 같을 수 있음

// 조합, number.length개에서 3개를 뽑는(중복 없음)
// 배열을 돌며 하나를 고정 시키고 나머지 숫자들의 조합을 구한다.
// 합이 0인 쌍의 개수 구하기
import _ from "lodash";
function threeMusketeers(number: number[]): number {
  const pickNum = (numArr: number[], pick: number) => {
    const results: number[][] = [];
    if (pick === 1) {
      return numArr.map((num) => [num]);
    }

    numArr.forEach((num, idx, arr) => {
      const a = arr.slice(idx + 1);
      const b = pickNum(a, pick - 1);
      const c = b?.map((bNum) => [num, ...bNum]);
      results.push(...c);
    });
    return results;
  };
  const pickArr = pickNum(number, 3);

  return pickArr.filter((numArr) => _.sum(numArr) === 0).length;
}

console.log(threeMusketeers([-3, -2, -1, 0, 1, 2, 3]));
console.log(threeMusketeers([-2, 3, 0, 2, -5]));
