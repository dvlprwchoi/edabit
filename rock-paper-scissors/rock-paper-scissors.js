function rps(p1, p2) {
  if (p1 === p2) {
    return `It's a draw`;
  } else if (
    (p1 === 'Rock' && p2 === 'Paper') ||
    (p1 === 'Scissors' && p2 === 'Rock') ||
    (p1 === 'Paper' && p2 === 'Scissors')
  ) {
    return 'The winner is p2';
  } else {
    return 'The winner is p1';
  }
}

function rps(p1, p2) {
  const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper'];
  return p1 === p2
    ? "It's a draw"
    : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`;
}

function rps(p1, p2) {
  let w = {
    Rock: 'Scissors',
    Scissors: 'Paper',
    Paper: 'Rock',
  };
  if (p1 === p2) return "It's a draw";
  return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}`;
}
