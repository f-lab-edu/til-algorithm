function flipNumToArray(n: number): number[] {
  const stringN = String(n);

  return [...stringN].reverse().map(Number);
}

console.log(flipNumToArray(29384));
