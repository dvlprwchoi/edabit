function skipTooMuchSugarDrinks(drinks) {
  return drinks.filter((x) => x !== 'fanta' && x !== 'cola');
}

console.log(skipTooMuchSugarDrinks(['fanta', 'cola', 'water']));
