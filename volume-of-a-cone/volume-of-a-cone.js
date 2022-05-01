function coneVolume(h, r) {
  if (h != 0 && r != 0) {
    return parseFloat(((Math.PI * h * r ** 2) / 3).toFixed(2));
  } else {
    return 0;
  }
}

console.log(coneVolume(15, 6));
