export const sum = (a: number, b: number) => {
  return a + b;
};

export const addArray = (arr: number[]): number => {
  return arr.reduce((prev: number, curr: number) => curr + prev, 0);
};
