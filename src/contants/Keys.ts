const operatorKeys = ['+', '-', '*', '/'];
const numberKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
enum KeyType {
  Operator = 0,
  Number = 1,
  Clear = 2,
  Equal = 3,
  Decimal = 4,
}

export { operatorKeys, numberKeys, KeyType };
