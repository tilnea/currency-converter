export const calculateNewAmount = (
  amount: string,
  rate: number,
  base: number
): number => {
  return (
    Math.round(((parseFloat(amount) * rate) / base + Number.EPSILON) * 100000) /
    100000
  );
};
