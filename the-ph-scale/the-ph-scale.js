function pHName(pH) {
  return pH === 7
    ? 'neutral'
    : pH > 7 && pH <= 14
    ? 'alkaline'
    : pH >= 0 && pH < 7
    ? 'acidic'
    : 'invalid';
}
