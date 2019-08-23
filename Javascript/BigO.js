/**
 * We say that an algorithm is O(f(n)) if the number of simple operations
 *  the computer has to do is eventually less than a constant times f(n), as n increases
 */
// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n  )
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different!

/**
 * NB Time complexity.
 * 1. Arithmetic operations are constant
 * 2. Variable assignment is constant
 * 3. Accessing elements in an array (by index) or object (by key) is constant
 * 4. In a loop, the the complexity is the length of the loop times the complexity of
 *  whatever happens inside of the loop
 */

 /**
  * All property lookups are constant time eg .length
  */

 /**
  * NB space complexity.
  * 1. Most primitives (booleans, numbers, undefined, null) are constant space
  * 2. Strings require O(n) space (where n is the string length)
  * 3. Reference types are generally O( n), 
  * where n is the length (for arrays) or the number of keys (for objects)
  */