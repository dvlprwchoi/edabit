function sortNumsAscending(arr) {
  if (arr === [] || arr === null) {
    return [];
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 1; j < arr.length; j++) {
  //       if (arr[i] > arr[j]) {
  //         return (arr[i] = arr[j]);
  //       }
  //     }
  //   }
  return (arr = arr.sort((a, b) => a - b));
}

console.log(sortNumsAscending([1, 2, 10, 50, 5]));
