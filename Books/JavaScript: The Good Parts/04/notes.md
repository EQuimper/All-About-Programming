# Functions

A function encloses a set of statements.

---

# Function objects

Functions in JavaScript are objects. Objects are collections of name/value pairs having a hidden link to a prototype object.

Every function object is also created with a prototype property. Its value is an object with a constructor property whose value is the function.

Since functions are objects, they can be used like any other value. Functions can be stored in variables, objects, and arrays. Functions can be passed as arguments to functions, and functions can be returned from functions. Also, since functions are objects, functions can have methods.

The thing that is special about functions is that they can be invoked.

---

# Function literal

An inner function of course has access to its parameters and variables. An inner function also enjoys access to the parameters and variables of the functions it is nested within.

---

# Invocation

Invoking a function suspends the execution of the current function, passing control and parameters to the new function.

Every function receives two additional parameters:

1. `this`
2. `arguments`

They are four patterns of invocation in JavaScript:

1. The method invocation pattern
2. The function invocation pattern
3. The constructor invocation pattern
4. The apply invocation pattern

---

# The Method Invocation Pattern

When a function is stored as a property of an object, we call it a **method**.

A method can use `this` to access the object so that it can retrieve values from the object or modify the object.

Methods that get their object context from this are called `public methods`.

---

# The Function Invocation Pattern

When a function is not the property of an object, then it is invoked as a function.

---

# The Constructor Invocation Pattern

JavaScript is a *prototypal* inheritance language. That means that objects can inherit properties directly from other objects. The language is class-free.

If a function is invoked with the `new` prefix, then a new object will be created with a hidden link to the value of the function’s prototype member, and this will be bound to that new object.

Functions that are intended to be used with the new prefix are called `constructors`. By convention, they are kept in variables with a capitalized name.

---

# The Apply Invocation Pattern

The apply method lets us construct an array of arguments to use to invoke a function.

---

# Arguments

A bonus parameter that is available to functions when they are invoked is the `arguments array`.

---

# Return

When a funtion is invoked, it begins execution with he first statement, and ends when it hits the `}` that closes the function body.

The return statement can be used to cause the function to return early. When return is executed, the function returns immediately without executing the remaining statements.

A function always returns a value. If the return value is not specified, then `undefined` is returned.

If the function was invoked with the new prefix and the return value is not an object, then this (the new object) is returned instead.

---

# Exceptions

Exceptions are unusual (but not completely unexpected) mishaps that interfere with the normal flow of a pro- gram.

---

# Augmenting Types

JavaScript allows the basic types of the language to be augmented.

---

# Recursion

A `recursive` function is a function that calls itself, either directly or indirectly.

Generally, a recursive function calls itself to solve its subproblems.


Recursive functions can be very effective in manipulating tree structures such as the browser’s Document Object Model (DOM). Each recursive call is given a smaller piece of the tree to work on.
