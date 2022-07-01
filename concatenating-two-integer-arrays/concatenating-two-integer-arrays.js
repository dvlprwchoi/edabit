function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}

function concat(arr1, arr2) {
  for (item of arr2) {
    arr1.push(item);
  }
  return arr1;
}
