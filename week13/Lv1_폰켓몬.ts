// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

// N마리의 폰켓몬 중 절반 가져가기, 폰켓몬 수는 항상 짝수
// 폰켓몬 => 같은 종류 = 같은 번호
// 선택 방법 => 조합
// 최대한 다양한 종류의 폰켓몬을 가지길 원함
// nums: N마리 폰켓몬의 종류 번호가 담긴 배열
// 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return

function pcikPokémon(nums: number[]): number {
  const set = new Set(nums);
  const pick = nums.length / 2;

  return set.size > pick ? pick : set.size;
}

console.log(pcikPokémon([3, 1, 2, 3]));
console.log(pcikPokémon([3, 3, 3, 2, 2, 4]));
console.log(pcikPokémon([3, 3, 3, 2, 2, 2]));
