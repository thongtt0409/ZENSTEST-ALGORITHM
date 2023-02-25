const arr = [1, 3, 5, 7, 9];

function countTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log('total = ', total);
}

countTotal(arr);

function findMinNumber(array) {
  let minNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (minNumber > array[i]) minNumber = array[i];
  }
  console.log('miniNumber = ', minNumber);
}

findMinNumber(arr);

function findMaxNumber(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxNumber < array[i]) maxNumber = array[i];
  }
  console.log('maxNumber = ', maxNumber);
}

findMaxNumber(arr);
