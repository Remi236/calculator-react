import { useState } from 'react';
import { KeyType } from '../contants/Keys';
import { calc, getNumber } from '../helpers/calculator';

export const useCalculator = () => {
  const [memmory, setMemory] = useState({
    firstNumber: '0',
    secondNumber: '0',
    operator: '+',
    isFirstNumber: true,
  });

  const handleNumber = (char: string, type: KeyType) => {
    const tempMemmory = { ...memmory };
    switch (type) {
      case KeyType.Number:
        tempMemmory.isFirstNumber
          ? (tempMemmory.firstNumber = getNumber(
              tempMemmory.firstNumber + char
            ).toString())
          : (tempMemmory.secondNumber = getNumber(
              tempMemmory.secondNumber + char
            ).toString());
        break;
      case KeyType.Decimal:
        tempMemmory.isFirstNumber
          ? (tempMemmory.firstNumber += char)
          : (tempMemmory.secondNumber += char);
        break;
      case KeyType.Operator:
        tempMemmory.operator = char;
        tempMemmory.isFirstNumber = false;
        break;
      case KeyType.Clear:
        tempMemmory.isFirstNumber
          ? (tempMemmory.firstNumber = '0')
          : (tempMemmory.secondNumber = '0');
        break;
      case KeyType.Equal:
        const { firstNumber, secondNumber, operator } = tempMemmory;
        const value = calc(
          getNumber(firstNumber),
          getNumber(secondNumber),
          operator
        ).toString();
        tempMemmory.firstNumber = value;
        tempMemmory.secondNumber = '0';
        tempMemmory.isFirstNumber = true;
        break;
      default:
        break;
    }
    setMemory({
      firstNumber: tempMemmory.firstNumber.slice(0, 20),
      secondNumber: tempMemmory.secondNumber.slice(0, 20),
      isFirstNumber: tempMemmory.isFirstNumber,
      operator: tempMemmory.operator,
    });
  };

  return {
    memmory,
    handleNumber,
  };
};
