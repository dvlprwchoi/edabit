function reverseOdd(str) {
  const strArr = str.split(' ');
  for (i in strArr) {
    if (strArr[i].length % 2 !== 0) {
      strArr[i] = strArr[i].split('').reverse().join('');
    }
  }
  return strArr.join(' ');
}

console.log(reverseOdd('One two three four'));
