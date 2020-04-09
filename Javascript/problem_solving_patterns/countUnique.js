/**
 * multiple pointer pattern
 * @param {*} arr 
 */
function countUnique(arr) {
    let first = 0;
    let newArr = [];
    newArr[first] = arr[first];
   for(let i = 1; i<arr.length; i++) {
    if (arr[first] !== arr[i] ) {
        first +=1;
        arr[first] = arr[i];
        newArr[first] = arr[i];
    }
   }
   console.log(newArr, arr.length)
   return arr
}

function countUnique2(arr) {
    let current = 0;
    let iterator = 1;
   while(arr[iterator]) {
    if(arr[current] !== arr[iterator]) {
        current += 1;
        arr[current] = arr[iterator]
        iterator +=1;
        console.log(arr)
    } else {
        iterator +=1;
        console.log(arr, 2)
    }
   }
   console.log(arr);
   return arr
}

countUnique2([1,2,2,3,3,4,5,6,]);
countUnique2([-2, -1, -1, 0, 1]);
