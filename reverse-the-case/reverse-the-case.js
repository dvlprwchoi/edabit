function reverseCase(str) {
  return str
    .split('')
    .map((x) => {
      if (x === x.toLowerCase()) {
        return (x = x.toUpperCase());
      } else if (x === ' ') {
        return ' ';
      } else {
        return (x = x.toLowerCase());
      }
    })
    .join('');
}

console.log(reverseCase('Happy Birthday'));
