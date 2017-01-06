// Factorial  (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  if (num === 1) { // base case
    return num;
  } else { // recursive case
    return num * factorial(num - 1);
  }
}

factorial(4);

// CALL STACK

/*
* num = 4
* return 4 * factorial(3)
*
* num = 3
* return 3 * factorial(2)
*
* num = 2
* return 2 * factorial(1)
*/

// Call himself until the base case is what we want
