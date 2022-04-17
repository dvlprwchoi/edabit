// function kineticEnergy(m, v) {
//   return Math.round(0.5 * (m * Math.pow(v, 2)));
// }

function kineticEnergy(m, v) {
  return Math.round((m * v ** 2) / 2);
}

console.log(kineticEnergy(3.333, 5.4));
