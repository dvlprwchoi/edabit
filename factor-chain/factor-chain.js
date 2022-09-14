function factorChain(arr) {
  let remainderSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    remainderSum += arr[i + 1] % arr[i];
  }
  return remainderSum === 0;
}

function factorChain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i]) return false;
  }
  return true;
}

console.log(factorChain([1, 2, 4, 8, 16, 32]));
