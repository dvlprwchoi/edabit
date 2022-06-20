function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

let tuckIn = (arr1, arr2) => {
  arr1.splice(1, 0, ...arr2);
  return arr1;
};
