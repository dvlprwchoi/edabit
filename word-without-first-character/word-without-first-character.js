// function newWord(str) {
//   const s1 = str.split('');
//   const s2 = s1.shift();
//   const s3 = s1.join('');
//   return s3;
// }

// function newWord(str) {
//   return str.substring(1);
// }

function newWord(str) {
  return str.slice(1);
}

console.log(newWord('plum'));
