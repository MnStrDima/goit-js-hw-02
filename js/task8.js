function reduceArray(array) {
  let total = 0;

  for (const item of array) {
    if (array.length !== 0) {
      total += item;
    }
  }

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
