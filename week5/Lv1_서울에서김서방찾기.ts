// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function searchKim(seoul: string[]): string {
  const x = seoul.findIndex((str) => str === "kim");

  return "김서방은 " + x + "에 있다";
}

console.log(searchKim(['lee', 'park', 'jane','kim', 'woo']));
