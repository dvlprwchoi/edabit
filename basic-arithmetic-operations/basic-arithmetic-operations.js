function operation(a, b, op) {
  const operation = { add: '+', subtract: '-', divide: '/', multiply: '*' };
  if (b === '0' && op === 'divide') {
    return 'undefined';
  } else {
    return eval(a + operation[op] + b);
  }
}

function operation(a, b, op) {
  a = parseInt(a);
  b = parseInt(b);
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : 'undefined';
  }
}

console.log(operation('1', '2', 'add'));
