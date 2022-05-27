function isRepdigit(num) {
  if (num >= 0) {
    const numArr = num.toString().split('');
    let first = 0;
    let last = numArr.length - 1;
    while (first < last) {
      if (numArr[first] !== numArr[last]) {
        return false;
      }
      first++;
    }
    return true;
  } else return false;
}

console.log(isRepdigit(666));
