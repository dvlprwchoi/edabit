function findNaN(number) {
  let nanIndex = null;
  number.map((x) => {
    if (Number.isNaN) {
      nanIndex = number.findIndex(Number.isNaN);
    }
  });
  return nanIndex !== null ? nanIndex : -1;
}

function findNaN(number) {
  return number.findIndex(Number.isNaN);
}

console.log(findNaN([NaN, 1, 2, 3, 4]));
