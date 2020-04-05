function freqCounter(arr1, arr2) {
    let first = {};
    let second = {};
    if(arr1.length !== arr2.length) {
      return false
    }
  
    for(let a of arr1) {
      first[a] = (first[a] || 0 ) + 1
    }
  
    for(let b = 0; b < arr2.length; b++) {
      second[arr2[b]] = (second[arr2[b]] || 0) + 1;
    }
    console.log(first, second)
    let search = false;
    for(let obj in first) {
      console.log(obj)
     if(!(second.hasOwnProperty(obj ** 2))) {
       return false
     }
    //  check for occurence
     if(second[obj ** 2] !== first[obj]) {
       return false
     }
    }
    return true;
  
  }
  
  freqCounter([1,2,3, 2, 5], [9,1,4,4,11])