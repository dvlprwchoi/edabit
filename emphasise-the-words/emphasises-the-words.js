function emphasise(str) {
  str = str.toLowerCase();
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}
