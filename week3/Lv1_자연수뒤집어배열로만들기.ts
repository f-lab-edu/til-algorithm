function flipNumToArray(n: number): number[] {
    const stringN = String(n);

    return [...stringN].reverse().map((element) => Number(element));
}