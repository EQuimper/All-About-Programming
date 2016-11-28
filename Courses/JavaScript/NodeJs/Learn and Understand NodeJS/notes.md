Node is written in C++, because the V8 is written in C++.

ECMAScript: is the standard JavaScript is based.

A JavaScript Engine: A program that convert JavaScript code into something the computer processor can understand. And it should follow the ECMAScript standard.

Breakpoint: A spot in our code where we tell a debugging tool to pause the execution of our code.

Module: A reusable block of code whose existence does not accidentally impact other code

First-Class Functions: Everything you can do with other types you can do with functions.
> You can use function like strings, numbers, etc. (i.e. pass them around, set variables, equal to them, put them in arrays, and more)

An Expression: A block of code that results in a value
> Function expressions are possible in JavaScript because functions are first-class.

Invoke: Run the function
> We can also say 'call' the function

Name/Value pair: A name which maps to a value
> The name way be defined more than once, but only can have one value in any given *context*. That value may be more name/value pairs.

Object: A collection of name/value pairs
> The simplest definition when talking about JavaScript.

Object Literal: Name/value pairs separated by commas and surrounded by curly braces.
> This is just a quick, shorthand way to create JavaScript objects in code.

Inheritance: One object gets access to the properties and methods of another object.

Function contructors: A normal function that is used to construct object.
> *The 'this' variable points a new empty object*, and that object is returned from the function automatically.

Primitive: A type of data that represents a single value
> List a number or a string. In other words, *not an object.*

Scope: Where in code you have access to particular variable or function. 

## How V8 import file

1. *require* is a function, that you pass a 'path' too
2. *module.exports* is what the require function returns
3. this works because *your code is actually wrapped in a function* that is given these things as funtion parameters.

---

JSON: 'JavaScript object notation' - A standard for structuring data that is inpired by object literals
> JavaScript engines are built to understand it.

Revealing module pattern: Exposing only the properties and methods you want via an returned object
> A very common and clan way to stucture and protect code within modules.

Mutate: To change something
> For example, adding a method or property to an object means you've *mutated* the object.
