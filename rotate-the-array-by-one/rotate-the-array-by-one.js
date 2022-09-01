function rotateByOne(arr) {
  last = arr.pop();
  return [last, ...arr];
}

console.log(rotateByOne([4, 20, 15, 26, 8]));
