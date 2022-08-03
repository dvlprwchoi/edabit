// Fix this incorrect code so that all tests pass!
function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return arr2;
}

function flatten(arr) {
  return [].concat(...arr);
}

function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b));
}

function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  return arr2;
}

console.log(
  flatten([
    ['a', 'b'],
    ['c', 'd'],
  ])
);
