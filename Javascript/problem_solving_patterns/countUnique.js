function countUnique(arr) {
    let first = 0;
   for(let i = 1; i<arr.length; i++) {
    if (arr[first] !== arr[i] ) {
        first +=1;
        arr[first] = arr[i];
    }
   }
   return arr
}

countUnique([1,2,2, 3, 3,4,5,6,]);
