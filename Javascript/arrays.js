/**
 * Objects
 */

 /**
  * When to use objects
  * 1.When you don't need order
  * 2.When you need fast access / insertion and removal
  * 
  * NB
  * 1. Insertion -   O(1)
  * 2. Removal -   O(1)
  * 3. Searching -   O(N)
  * 4. Access -   O(1)
  */

//  Big O of Object Methods

//  Object.keys -   O(N)
//  Object.values -   O(N)
//  Object.entries -   O(N) -> sort into array of arrays
//  hasOwnProperty -   O(1) -> returns true or false if an object is present


/**
 * Arrays
 */

// WHEN TO USE ARRAYS
// When you need order
// When you need fast access / insertion and removal (sort of....)

// NB
// Searching -   O(N) -> checking to see what is inside 
// Access -   O(1)

// Big O of Array Operations

// push -   O(1)
// pop -   O(1)
// shift -   O(N)
// unshift -   O(N)
// concat -   O(N)
// slice -   O(N)
// splice -   O(N)
// sort -   O(N * log N)
// forEach/map/filter/reduce/etc. -   O(N)
// inserting and removal at the begining is 0(N)