function addName(obj, name, value) {
  let dog = {
    [name]: value,
  };
  return Object.assign(obj, dog);
}

function addName(obj, name, value) {
  return { ...obj, [name]: value };
}

function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}

console.log(addName({ piano: 500 }, 'Brutus', 400));
