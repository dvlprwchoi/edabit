function repetition(txt, n) {
  if (n < 0) {
    return '';
  } else if (n === 1) {
    return txt;
  } else if (n > 0) {
    return txt + repetition(txt, n - 1);
  }
}

console.log(repetition('cherry', 2));
