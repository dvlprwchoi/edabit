const relationToLuke = (n) =>
  `Luke, I am your ${
    ['father', 'sister', 'brother in law', 'droid']['DLHR'.indexOf(n[0])]
  }.`;

function relationToLuke(name) {
  const family = {
    'Darth Vader': 'father',
    Leia: 'sister',
    Han: 'brother in law',
    R2D2: 'droid',
  };
  return `Luke, I am your ${family[name]}.`;
}

console.log(relationToLuke('Han'));
