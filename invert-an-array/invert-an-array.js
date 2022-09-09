function invertArray(arr) {
  return arr.map((x) => {
    if (x !== 0) {
      return x * -1;
    } else {
      return x;
    }
  });
}

function invertArray(arr) {
  return arr.map((x) => (x === 0 ? x : -x));
}
