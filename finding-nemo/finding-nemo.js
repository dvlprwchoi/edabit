// function findNemo(sentence) {
//   const arr = sentence.split(' ');
//   const nemoIndex = arr.indexOf('Nemo');
//   return nemoIndex === -1
//     ? `I can't find Nemo :(`
//     : `I found Nemo at ${nemoIndex + 1}!`;
// }

const findNemo = (sentence) => {
  const index = sentence.split(' ').findIndex((e) => e === 'Nemo');
  return index >= 0 ? `I found Nemo at ${index + 1}!` : "I can't find Nemo :(";
};

console.log(findNemo('d'));
