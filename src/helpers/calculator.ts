export const calc = (a: number, b: number, operator: string) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 0;
  }
};

export const getNumber = (number: string) =>
  number.includes('.') ? parseFloat(number) : parseInt(number, 10);
