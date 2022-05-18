// function countVowels(str) {
//   const strLower = str.toLowerCase();
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let x of strLower) {
//     if (vowels.includes(x)) {
//       count++;
//     }
//   }
//   return count;
// }

// function countVowels(str) {
//     return str.match(/[aeiou]/g).length;
//   }

function countVowels(str) {
  return str.split('').filter((x) => 'aeiouAEIOU'.includes(x)).length;
}

console.log(countVowels('Celebration'));
