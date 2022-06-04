function matchLastItem(arr) {
  let concat = '';
  const lastItem = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    concat += arr[i];
  }
  return concat === lastItem;
}

function matchLastItem(arr) {
  return arr.pop() === arr.join('');
}

function matchLastItem(arr) {
  return arr.slice(0, arr.length - 1).join('') === arr[arr.length - 1];
}

// console.log(matchLastItem([8, 'thunder', true, '8thundertrue']));
console.log(matchLastItem([1, 1, 1, '11']));
