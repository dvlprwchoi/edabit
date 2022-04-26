function arrayOfMultiples(num, length) {
  arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i * num);
  }
  return arr;
}

console.log(arrayOfMultiples(12, 10));
