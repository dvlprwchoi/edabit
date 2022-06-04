function amazingEdabit(str) {
  return str.includes(`edabit`) ? str : str.replace(`is`, `is not`);
}

console.log(amazingEdabit('Infinity is amazing.'));
