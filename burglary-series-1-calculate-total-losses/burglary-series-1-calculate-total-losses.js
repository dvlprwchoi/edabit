function calculateLosses(obj) {
  objValuesArr = Object.values(obj);
  if (objValuesArr.length !== 0) {
    return objValuesArr.reduce((a, b) => a + b);
  } else {
    return 'Lucky you!';
  }
}

const calculateLosses = (obj) =>
  Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';

console.log(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
);
