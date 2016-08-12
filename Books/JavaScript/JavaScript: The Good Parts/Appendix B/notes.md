# Appendix B

## Bad Parts

By simply avoiding these features, you make JavaScript a better lan- guage, and yourself a better programmer.

### ==

JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=.

Always use === and !==

---

### with Statement

Simply by being in the language, the with statement significantly slows down JavaScript processors because it frustrates the lexical binding of variable names. It was well inten- tioned, but the language would be better if it didn’t have it.

---

### eval

The eval function passes a string to the JavaScript compiler and executes the result.

The Function constructor is another form of eval, and should similarly be avoided.

---

### continue Statement

The continue statement jumps to the top of the loop. I have never seen a piece of code that was not improved by refactoring it to remove the continue statement.

---

### The function Statement Versus the function Expression

JavaScript has a function statement as well as a function expression. This is confus- ing because they can look exactly the same. A function statement is shorthand for a var statement with a function value.

The statement:
`function foo() {}`
means about the same thing as:
`var foo = function foo() {};`

function statements are subject to hoisting.

---

### Typed Wrappers


JavaScript has a set of typed wrappers. For example:
` new Boolean(false)`
produces an object that has a valueOf method that returns the wrapped value. This turns out to be completely unnecessary and occasionally confusing. Don’t use new Boolean or new Number or new String.
Also avoid new Object and new Array. Use {} and [] instead.

---
