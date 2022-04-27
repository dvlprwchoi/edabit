function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

function getVoteCount(votes) {
  return votes['upvotes'] - votes['downvotes'];
}

function getVoteCount(votes) {
  const { upvotes, downvotes } = votes;
  return upvotes - downvotes;
}
