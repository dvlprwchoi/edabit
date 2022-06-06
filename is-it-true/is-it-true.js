function isTrue(relation) {
  relation = relation.replace(`=`, `===`);
  return eval(relation);
}

function isTrue(relation) {
  return eval(relation.replace('=', '==='));
}

isTrue = (r) => eval(r.replace(/=/g, '=='));
