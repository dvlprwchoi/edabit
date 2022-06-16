function redundant(str) {
  function innerFunciton() {
    return str;
  }
  return innerFunciton;
}

const redundant = (str) => () => str;

const f1 = redundant('apple');
console.log(f1());
