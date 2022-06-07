function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

function cityFacts(city) {
  let { name, population, continent } = city;
  return `${name} has a population of ${population} and is situated in ${continent}`;
}
