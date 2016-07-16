# What is a function?

A function is a serie of statements who are grouped together into a special package in
JavaScript.

# Function Basics

- Defined with the function keyword
- Functions have to be declared
- Function name optional
- $, _, a..z, 0..9 and/or special chars
- Function parameters (if we have more than one we separated them by a comma)
- Function statements
- The return statement
- Invoking a function

# Four ways of invoking functions

- Functions
- Methods
- Constructors
- Call & Apply methods

# Invocation patterns
- A function can receive arguments & this
- Invoking stops current execution
- `this` parameter bound to global object

> The return method is a function

---

# Using functions as objects

## What's an object?
- Variables `var a = 2;`
- Lists `var myList = ('hi', true, 3)`
- Objects are flexible

## What an object looks like?

- Start with curly braces
- Flexible properties

```js
var info = {
    full_name: "Emanuel Quimper",
    title: "Mr",
    links: [
        {
            facebook: "www.facebook.com"
        },
        {
            google: "www.google.com"
        }
    ]
};
```

# Invoking functions as methods

- The `this` argument point to the object
- Invoke the function using the dot notation
- The binding of `this` happens at invocation time

# Invoking through the constructor

- Functions can construct objects
- Using the `new` keyword
- `new` creates a new instance of the object
- Each new instance has it's own set of properties
- `this` arguments points to the instance of the object
- Constructor names are capitalized

> We can use the command `console.dir()` to see the object value

# Expanding objects through prototype

- Prototypal Inheritance
- Every object can be based on another
- `prototype` object gives you access
- Multiple objects can inherit
- All objects inherit properties
- Declarations inherit from `Function`
- `Function` constructor inherits from `Object`

# Invoking through Call & Apply

- Indirect invocation
- Define the value of `this` argument
- Control: `this` and `arguments`
- `Call` passes a value, `Apply` an array

# The arguments parameter

- List of elements passed
- An array like object
- Numerical index `arguments[x]`
- We can get the `arguments.length`
- We can loop through arguments
- Can't use all array methods

# The return statement

- Returns an expression
- Sort of optional
- Only in function body
- Return sends something back to the caller
- Stops execution of the function
- You can have more than one
- Can be anything or nothing
- Careful with auto semicolon insertion
