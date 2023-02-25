const arr = [1, 3, 5, 7, 9];

function findMiniandMaxSum(array) {
  let total = 0;
  let minNumber = array[0];
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    total += arr[i];
    if (minNumber > array[i]) minNumber = array[i];
    if (maxNumber < array[i]) maxNumber = array[i];
  }
  const miniSum = total - maxNumber;
  const maxSum = total - minNumber;

  console.log('miniSum = ', miniSum, 'maxSum = ', maxSum);
}

findMiniandMaxSum(arr);
