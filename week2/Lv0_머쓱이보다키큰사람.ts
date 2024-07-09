// 키순으로 줄 세우기
// array:반 친구들 키 배열, height: 머쓱이 키
// 머쓱이보다 키 큰 사람 수 return

// function numberOfTallPeople(array: number[], height: number): number {
//   let tallNum = 0;

//   array.forEach((num) => {
//     if (height < num) {
//       tallNum += 1;
//     }
//   });

//   return tallNum;
// }

function numberOfTallPeople(array: number[], height: number): number {
  return array.filter((element) => element > height).length;
}

console.log(numberOfTallPeople([167, 172, 178, 180], 175));
