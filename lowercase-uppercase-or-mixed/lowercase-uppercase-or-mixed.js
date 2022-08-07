function getCase(str) {
  if (str === str.toUpperCase()) {
    return 'upper';
  } else if (str === str.toLowerCase()) {
    return 'lower';
  } else {
    return 'mixed';
  }
}

const getCase = (s) =>
  s === s.toUpperCase() ? 'upper' : s === s.toLowerCase() ? 'lower' : 'mixed';
