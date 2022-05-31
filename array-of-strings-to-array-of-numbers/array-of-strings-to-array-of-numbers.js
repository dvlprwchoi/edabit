// function toNumberArray(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(Number(arr[i]));
//   }
//   return newArr;
// }

function toNumberArray(arr) {
  return arr.map(Number);
}

// function toNumberArray(arr) {
//   numArray = [];
//   arr.forEach((value) => {
//     numArray.push(parseFloat(value));
//   });
//   return numArray;
// }

console.log(toNumberArray(['9.5', '8.8']));
