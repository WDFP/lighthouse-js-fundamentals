function lastIndexOf(array, number) {
  for (let result = array.length - 1; result >= 0; result --) {
    if (array[result] === number) {
      return result;
    } else if(array[result] !== number) {
      return -1;
    }
  } if (array.length === 0) {
    return -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
