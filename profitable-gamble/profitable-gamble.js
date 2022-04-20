function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  }
  return false;
}

console.log(profitableGamble(0.9, 1, 2));
