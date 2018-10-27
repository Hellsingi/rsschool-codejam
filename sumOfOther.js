function sumOfOther(array) {
  const arr = array;
  const sumArr = arr.reduce((sum, current) => sum + current, 0);
  return arr.map(item => sumArr - item);
}
