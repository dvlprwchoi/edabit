function isValid(zip) {
  return Number.isInteger(Number(zip)) && zip.length === 5;
}

const isValid = (zip) => /^\d{5}$/.test(zip);

console.log(isValid('8557'));
