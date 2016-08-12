# Appendix A

## Awful Parts1

### Global Variables

**The worst of all of JavaScript’s bad features is its dependence on global variables.**

A global variable is a variable that is visible in every scope.

Because a global variable can be changed by any part of the program at any time, they can significantly complicate the behavior of the program. Use of glo- bal variables degrades the reliability of the programs that use them.

JavaScript does not have a linker. All compilation units are loaded into a common global object.

Three ways to define global variables:

- Place a var statement outside of any function
    > `var foo = value;`
- Add a property directly to the global object
    > `window.foo = value;`
- Use a variable without declaring it. This is called *implied global*.
    > `foo = value;`

This was intended as a convenience to beginners by making it unnecessary to declare variables before using them.

---

### Scope

JavaScript’s syntax comes from C.

A block (a set of statements wrapped in curly braces) creates a scope.

Variables declared in a block are not visible outside of the block.

It is better to declare all variables at the top of each function.

---

### Semicolon Insertion

JavaScript has a mechanism that tries to correct faulty programs by automatically inserting semicolons. Do not depend on this. It can mask more serious errors.

---

### Reserved Words

The following words are reserved in JavaScript:

- abstract
- boolean
- break
- byte
- case
- catch
- char
- class
- const
- continue
- debugger
- default
- delete
- do
- double
- else
- enum
- export
- extends
- false
- final
- finally
- float
- for
- function
- goto
- if
- implements
- import
- in
- instanceof
- int
- interface
- long
- native
- new
- null
- package
- private
- protected
- public
- return
- short
- static
- super
- switch
- synchronized
- this
- throw
- throws
- transient
- true
- try
- typeof
- var
- volatile
- void
- while
- with

**They cannot be used to name variables or parameters.**

When reserved words are used as keys in object literals, they must be quoted. They cannot be used with the dot notation, so it is sometimes necessary to use the bracket notation instead.

---

### Unicode

JavaScript’s characters are 16 bits.

---

### typeof

The typeof operator returns a string that identifies the type of its operand.

```js
typeof 98.6 // number
```

Unfortunately:

```js
typeof null // object
```

---

### parseInt

Function that converts a string into an integer.

It stops when it sees a nondigit.

---

### +

The + operator can add or concatenate.

This complicated behavior is a common source of bugs. If you intend + to add, make sure that both operands are numbers.

---

### Floating Point

Binary floating-point numbers are inept at handling decimal fractions, so 0.1 + 0.2 is not equal to 0.3.

---

### NaN

not a number

JavaScript provides an isNaN function that can distinguish between numbers and NaN.

---

### Phony Arrays

JavaScript does not have real arrays.

Their performance can be considerably worse than real arrays.

---

### Falsy Values

- 0
- NaN
- ''
- false
- null
- undefined

`undefined` and `NaN` are not constants. They are global variables, and you can change their values. That should not be possible, and yet it is. Don’t do it.

---

### Object

JavaScript’s objects are never truly empty because they can pick up members from the prototype chain.
