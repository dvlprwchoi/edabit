function length(str) {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

console.log(length('apple'));
