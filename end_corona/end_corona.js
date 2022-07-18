function endCorona(recovers, newCases, activeCases) {
  return Math.ceil(activeCases / (recovers - newCases));
}
