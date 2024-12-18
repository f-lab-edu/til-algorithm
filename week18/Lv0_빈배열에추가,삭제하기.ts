// https://school.programmers.co.kr/learn/courses/30/lessons/181860

// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때,
// flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고,
// flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return

function addOrRemove(arr: number[], flag: boolean[]): number[] {
  const x: number[] = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      x.push(...Array(arr[i] * 2).fill(arr[i]));
    } else {
      x.splice(x.length - arr[i], arr[i]);
    }
  }
  
  return x;
}

console.log(addOrRemove([3, 2, 4, 1, 3], [true, false, true, false, false]));
