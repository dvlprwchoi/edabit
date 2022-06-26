function hasSameBread(arr1, arr2) {
  return arr1[0] == arr2[0] && arr1[arr1.length - 1] == arr2[arr2.length - 1];
}

const hasSameBread = (arr1, arr2) => {
  const [a, b, c] = arr1;
  const [x, y, z] = arr2;
  return a == x && c == z;
};

function hasSameBread(arr1, arr2) {
  return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();
}

console.log(
  hasSameBread(['toast', 'cheese', 'toast'], ['toast', 'cheese', 'toast'])
);
