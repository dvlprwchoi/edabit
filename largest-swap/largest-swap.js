function largestSwap(num) {
  const numToStr = num.toString();
  if (numToStr[0] >= numToStr[1]) {
    return true;
  } else {
    return false;
  }
}

console.log(largestSwap(53));
