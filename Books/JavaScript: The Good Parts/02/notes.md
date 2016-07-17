# Escaped charater

- \" double quote
- \' single quote
- \\ backslash
- \/ slash
- \b backspace
- \f formfeed
- \n new line
- \r carriage return
- \t tab
- \u 4 hexadecimal digits

---

# Strings

Strings have a length property.


Strings are immutable. Once it is made, a string can never be changed. But it is easy to make a new string by concatenating other strings together with the `+` operator.

---

# Statements

When used inside of a function, the `var` statement defines the function’s private variables.

Statements tend to be executed in order from top to bottom.

---

# Falsy values

- false
- null
- undefined
- ''
- 0
- NaN

---

# Switch statement

The switch statement performs a multiway branch. It compares the expression for equality with all of the specified cases. The expression can produce a number or a string. When an exact match is found, the statements of the matching case clause are executed. If there is no match, the optional default statements are executed.

---

# Case clause

A case clause contains one or more case expressions. The case expressions need not be constants. The statement following a clause should be a disruptive statement to prevent fall through into the next case. The break statement can be used to exit from a switch.

---

# While statement

The while statement performs a simple loop. If the expression is falsy, then the loop
will break. While the expression is truthy, the block will be executed.

---

# For statement

- **Initialization**: initializes the loop variable
- **Condition**: test the loop variable against a competion criterion.
- **Increment**: when the loop executes and then the loops repeats with the condition.

---

# For in statement

Enumerates the property names (or keys) of an object. On each iteration, another property name string from the `object` is assigned to the variable.

For determin whether the property name is truly a member of the object or was found instead on the prototype chain.

```js
for (myvar in obj) {
    if (obj.hasOwnProperty(myvar)) {
        ...
    }
}
```

---

# Do statement

The do statement is like the while statement except that the expression is tested after the block is executed instead of before. That means that the block will always be exe- cuted at **least once**.

---

# Try statement

The try statement executes a block and catches any exceptions that were thrown by the block. The catch clause defines a new variable that will receive the exception object.

---

# Throw statement

The throw statement raises an exception. If the throw statement is in a try block, then control goes to the catch clause. Otherwise, the function invocation is abandoned, and control goes to the catch clause of the try in the calling function.

---

# Return statement

Causes the early return from a function. It can also specify the value to be returned. If a return expression is not specified, then the return value will be `undefined`.

---

# Break statement

Cause the exit from a loop statements or a switch statement.

---

# Expression statement

An expression statement can either assign values to one or more variables or mem- bers, invoke a method, delete a property from an object. The = operator is used for assignment. Do not confuse it with the === equality operator. The += operator can add or concatenate.

---

# The ? ternary operator

Takes three operands. If the first operand is truthy, it pro- duces the value of the second operand. But if the first operand is falsy, it produces the value of the third operand.

---

# Literals

Object literals are a convenient notation for specifying new objects `{}`

Array literal `[]`

---

# Functions

```js
function name (parameters) {
    function body
}
```

A function literal defines a function value. It can have an optional name that it can use to call itself recursively. It can specify a list of parameters that will act as vari- ables initialized by the invocation arguments. The body of the function includes vari- able definitions and statements.
