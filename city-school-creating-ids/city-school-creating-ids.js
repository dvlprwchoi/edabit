function createID(firstname, lastname) {
  return (
    firstname[0].toLowerCase() +
    lastname[0].toUpperCase() +
    lastname.slice(1, 3).toLowerCase()
  );
}
