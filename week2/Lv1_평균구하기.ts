function average(arr: number[]): number {
  let numPlus = 0;

  arr.forEach((num) => {
    numPlus += num;
  });

  const answer = numPlus / arr.length;

  return answer;
}

console.log(average([1, 2, 3, 4, 5]));
