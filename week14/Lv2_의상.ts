// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

// 코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.

// 예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면
// 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다.

// 종류- 이름
// 얼굴- 동그란 안경, 검정 선글라스
// 상의- 파란색 티셔츠
// 하의- 청바지
// 겉옷- 긴 코트
// 코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
// 착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
// 코니는 하루에 최소 한 개의 의상은 입습니다.
// 코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return
function solution(clothes: string[][]): number {
  const map = new Map();
  const valueCount = [];
  let count = 0;

  for (const clothe of clothes) {
    if (!map.has(clothe[1])) {
      map.set(clothe[1], []);
    }
    map.get(clothe[1]).push(clothe[0]);
  }
  
  for (const x of map.values()) {
    valueCount.push(x.length);
  }

  for (const x of combinationCount(valueCount)) {
    if (x.length > 0) {
      if (x.length === 1) {
        count += x[0];
      } else {
        const c = x.reduce((acc, cur) => acc * cur);
        console.log(c);
        count += c;
      }
    }
  }

  return count;
}

function* combinationCount<T>(valueCount: T[]): Iterable<T[]> {
  if (valueCount.length === 0) {
    return yield [];
  }

  const [head, ...tail] = valueCount;

  yield* combinationCount(tail);

  for (const x of combinationCount(tail)) {
    yield [head, ...x];
  }
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["a", "b"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
