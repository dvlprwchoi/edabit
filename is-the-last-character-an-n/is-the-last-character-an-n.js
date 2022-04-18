const isLastCharacterN = (word) => (word.endsWith('n') ? true : false);

// const isLastCharacterN = word => word.slice(-1) === 'n'

// function isLastCharacterN(word) {
//   let a = word.split('').pop();
//   return a === 'n' ? true : false;
// }

console.log(isLastCharacterN('Bert'));
