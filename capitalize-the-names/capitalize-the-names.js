function capMe(arr) {
  return arr.map((x) => {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
  });
}
