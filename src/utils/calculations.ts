export const calculateNewAmount = (
  amount: number,
  rate: number,
  base: number
): number => {
  return (
    Math.round(((amount * rate) / base + Number.EPSILON) * 100000) / 100000
  );
};
