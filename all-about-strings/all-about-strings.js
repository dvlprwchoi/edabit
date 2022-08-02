function allAboutStrings(str) {
  let middle = '';
  let secondSecondIndexArr = [];
  let secondSecond = 'not found';
  const length = str.length;

  if (length % 2 === 0) {
    middle += str[length / 2 - 1];
    middle += str[length / 2];
  } else {
    middle += str[Math.floor(length / 2)];
  }

  [...str].filter((x, i) => {
    if (x == str[1]) {
      secondSecondIndexArr.push(i);
    }
  });

  if (secondSecondIndexArr.length > 1) {
    secondSecond = `@ index ${secondSecondIndexArr[1]}`;
  }

  return [length, str[0], str[length - 1], middle, secondSecond];
}

// const allAboutStrings = (str) => {
//   const len = str.length;
//   const first = str[0];
//   const second = str[1];
//   const midPoint = len / 2;
//   const middle = Number.isInteger(midPoint)
//     ? str.slice(midPoint - 1, midPoint + 1)
//     : str[Math.floor(midPoint)];
//   const last = str[len - 1];
//   const indexOfSecond = str.indexOf(second, 2);
//   const repeated =
//     indexOfSecond === -1 ? 'not found' : `@ index ${indexOfSecond}`;

//   return [len, first, last, middle, repeated];
// };

console.log(allAboutStrings('LASA'));
