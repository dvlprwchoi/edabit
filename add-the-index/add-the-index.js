function addIndexes(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + i);
  }
  return newArr;
}

const addIndexes = (arr) => arr.map((n, i) => n + i);

function addIndexes(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] += i;
  return arr;
}
