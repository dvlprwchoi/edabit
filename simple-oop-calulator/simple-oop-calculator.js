class Calculator {
  // Write functions to add(), subtract(), multiply() and divide()
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
const calculator = new Calculator();
console.log(calculator);
console.log(calculator.add(1, 5));
