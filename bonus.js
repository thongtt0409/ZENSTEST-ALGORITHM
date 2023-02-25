const arr = [1, 3, 5, 7, 9];

function countTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log('total = ', total);
}
countTotal(arr);
