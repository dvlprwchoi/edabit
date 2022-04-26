// function formatPhoneNumber(numbers) {
//   numbers.splice(0, 0, '(');
//   numbers.splice(4, 0, ')');
//   numbers.splice(5, 0, ' ');
//   numbers.splice(9, 0, '-');
//   return numbers.join('');
// }

function formatPhoneNumber(numbers) {
  let arr = '(XXX) XXX-XXXX'.split('');
  numbers.forEach((n) => {
    arr[arr.indexOf('X')] = n;
  });
  return arr.join('');
}

// function formatPhoneNumber(numbers) {
//     const first = numbers.slice(0, 3).join('')
//     const middle = numbers.slice(3,6).join('')
//     const last = numbers.slice(6).join('')
//     return `(${first}) ${middle}-${last}`
//   }

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
