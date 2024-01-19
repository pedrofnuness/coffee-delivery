/* eslint-disable prettier/prettier */
export const formatMoney = (inputNumber: number) => {
  const formattedValue = inputNumber.toFixed(2).toString().replace('.', ',');

  return formattedValue;
};
