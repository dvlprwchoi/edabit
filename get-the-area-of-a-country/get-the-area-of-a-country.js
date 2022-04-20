function areaOfCountry(name, area) {
  return `${name} is ${(area / 1489400).toFixed(
    2
  )}% of the total world's landmass`;
}

console.log(areaOfCountry('USA', 9372610));
