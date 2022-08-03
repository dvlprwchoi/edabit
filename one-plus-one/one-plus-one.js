// function wordedMath(expr) {
//   let result = [];
//   const inputObj = { one: '1', two: '2', zero: '0', plus: '+', minus: '-' };
//   const outputObj = { 1: 'One', 2: 'Two', 0: 'Zero' };
//   const exprArr = expr.split(' ').map((x) => x.toLowerCase());
//   for (i in exprArr) {
//     result.push(inputObj[exprArr[i]]);
//   }
//   return outputObj[eval(result.join('')).toString()];
// }

const key = { zero: 0, one: 1, two: 2, plus: '+', minus: '-' };

const wordedMath = (expr) =>
  ['Zero', 'One', 'Two'][
    eval(
      expr
        .toLowerCase()
        .split(' ')
        .map((e) => key[e])
        .join('')
    )
  ];

console.log(wordedMath('zero Plus one'));
