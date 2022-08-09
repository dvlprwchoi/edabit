function factorGroup(num) {
  return Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even';
}

console.log(factorGroup(33));
