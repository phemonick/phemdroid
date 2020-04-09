/**
 * sliding windows pattern.
 * @param {array} arr 
 * @param {int} num 
 */
function maxSubArraySum(arr, num) {
  let tempSum = 0;

  if(num > arr) {
    return null;
  }

  for(let i = 0; i<num; i++){
    tempSum += arr[i];
  }

  for(let j = num; j<=arr.length -1; j++) {
    let newSum = tempSum + arr[j] - arr[j-num];
    if (newSum > tempSum) {
      tempSum = newSum;
    }
  }
  console.log(tempSum);
  return tempSum;
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
