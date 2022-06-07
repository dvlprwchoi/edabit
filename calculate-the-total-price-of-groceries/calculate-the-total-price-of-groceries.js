function getTotalPrice(groceries) {
  const totalPriceByProductArr = groceries.map((v, i) =>
    Number.parseFloat(groceries[i].quantity * groceries[i].price)
  );
  return Number(totalPriceByProductArr.reduce((a, b) => a + b).toFixed(2));
}

function getTotalPrice(groceries) {
  return Number(
    groceries
      .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
      .toFixed(2)
  );
}
console.log(
  getTotalPrice([
    { product: 'Milk', quantity: 1, price: 1.5 },
    { product: 'Eggs', quantity: 12, price: 0.1 },
    { product: 'Bread', quantity: 2, price: 1.6 },
    { product: 'Cheese', quantity: 1, price: 4.5 },
  ])
);
