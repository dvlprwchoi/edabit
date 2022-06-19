function tempConversion(celsius) {
  f = Number(((celsius * 9) / 5 + 32).toFixed(2));
  k = Number((celsius + 273.15).toFixed(2));
  if (k > 0) {
    return [f, k];
  } else return 'Invalid';
}
