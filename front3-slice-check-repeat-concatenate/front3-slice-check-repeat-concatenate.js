function frontThree(str) {
  if (str.length < 3) {
    return str.repeat(3);
  } else {
    return str.slice(0, 3).repeat(3);
  }
}

console.log(frontThree('Python'));
