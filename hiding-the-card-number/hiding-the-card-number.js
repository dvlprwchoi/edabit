function cardHide(card) {
  const lastFours = card.slice(-4);
  const first = '*'.repeat(card.length - 4);
  return first + lastFours;
}

const cardHide = (card) => card.slice(-4).padStart(card.length, '*');
