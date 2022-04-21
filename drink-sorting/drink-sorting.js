function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
}

console.log(
  sortDrinkByPrice([
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
  ])
);
