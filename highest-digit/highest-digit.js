function highestDigit(number) {
  number = number.toString().split('');
  return Math.max(...number);
}

console.log(highestDigit(377401));
