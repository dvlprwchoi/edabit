function journeyDistance(num) {
  if (num === 3) {
    return 1;
  } else if (num > 3) {
    return 1 + (num - 3) / 2;
  } else {
    return 0;
  }
}
