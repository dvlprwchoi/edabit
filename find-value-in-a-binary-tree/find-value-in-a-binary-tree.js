function valueInTree(tree, val) {
  return tree.flat(Infinity).includes(val);
}
