import { KeyType, numberKeys, operatorKeys } from "../contants/Keys";
import { useCalculator } from "../hooks/calculator";

const Calculator = () => {
  const {memmory,  handleNumber} = useCalculator();
  const {isFirstNumber, firstNumber , secondNumber} = memmory;
  return (
    <div className="calculator">
      <div className="calculator__output">{isFirstNumber ? firstNumber: secondNumber}</div>
      <div className="calculator__keys">
        {
          operatorKeys.map((key, index) => ( <button key={index} onClick={(e) => handleNumber(e.currentTarget.innerText, KeyType.Operator)} className="calculator__key calculator__key--operator">{key}</button> ))
        }
        {
          numberKeys.map((key, index) => ( <button key={index}  onClick={(e) => handleNumber(e.currentTarget.innerText, KeyType.Number)} className="calculator__key">{key}</button> ))
        }
        <button className="calculator__key"  onClick={(e) => handleNumber(e.currentTarget.innerText, KeyType.Decimal)}>.</button>
        <button className="calculator__key"  onClick={(e) => handleNumber(e.currentTarget.innerText, KeyType.Clear)}>AC</button>
        <button className="calculator__key calculator__key--enter"  onClick={(e) => handleNumber(e.currentTarget.innerText, KeyType.Equal)}>=</button>
      </div>
    </div>
  );
};
export default Calculator;