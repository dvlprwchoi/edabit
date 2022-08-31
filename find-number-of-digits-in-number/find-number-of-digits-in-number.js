function num_of_digits(num) {
  return num !== 0 ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1;
}
