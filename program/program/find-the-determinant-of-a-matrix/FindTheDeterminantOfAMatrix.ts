const determinant = (m: any[]) =>
  m.length == 1
    ? m[0][0]
    : m.length == 2
    ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
    : m[0].reduce(
        (r: number, e: number, i: number) =>
          r +
          (-1) ** (i + 2) *
            e *
            determinant(
              m.slice(1).map((c: any[]) => c.filter((_, j) => i != j))
            ),
        0
      );

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 0

console.log(determinant(test));
