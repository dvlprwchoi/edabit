function getFilename(path) {
  const fileExt = path.split('/').pop();
  return fileExt;
  //   return path.includes('/') ? fileExt : path;
}

console.log(getFilename('edabit.txt'));
