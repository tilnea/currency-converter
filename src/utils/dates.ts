export const getToday = () => {
  let newDate = new Date();
  const offset = newDate.getTimezoneOffset();
  newDate = new Date(newDate.getTime() - offset * 60 * 1000);
  const today = newDate.toISOString().split("T")[0];

  return today;
};
