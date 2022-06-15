function sayHelloBye(name, num) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (num === 1) {
    return `Hello ${name}`;
  } else if (num === 0) {
    return `Bye ${name}`;
  }
}

const sayHelloBye = (name, num) =>
  (num === 1 ? `Hello ` : `Bye `) +
  name.charAt(0).toUpperCase() +
  name.slice(1);
