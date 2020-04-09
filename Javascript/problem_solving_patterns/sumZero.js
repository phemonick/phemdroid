/**
 * Multiple pointer pattern
 * @param {*} arr 
 */
function sumZero(arr) {
    let left = 0;
    let right = 0;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if(sum > 0) {
            right --;
        } else {
            right ++;
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 5, 10])