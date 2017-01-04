# Functional Programming

## Lambda

A lambda is a function that is used as data.

It is common to confuse the words “closure” and “lambda” as synonyms. That is not accurate. Not all lambdas are closures, and not all closures are lambdas. A closure is created when a function references data that is contained outside the function scope. A lambda is a function that is used as a value (assigned to a variable or passed between functions). Some languages support lambdas but do not support closures.

Higher-order functions are functions that consume or return functions as data. Lambdas get passed to and/or returned from higher order functions, and a function might be both a lambda and a higher order function, but not all higher order functions are lambdas.

*If a function is used as an argument or return value, it’s a lambda.*

Objects don’t guarantee any particular order; arrays do.

## Stateless Functions (aka Pure Functions)

Pure functions are stateless. This means that they do not use or modify variables, objects, or arrays that were defined outside the function.

Because you don’t have to worry about clobbering shared data, stateless functions can often be run in parallel, meaning that it’s much easier to scale computation horizontally across a large number of worker nodes. In other words, stateless functions are great for high-concurrency applications.

## Asynchronous Operations

Asynchronous operations are operations that happen outside the linear flow of program execution. Normally, the JavaScript engine will execute code line by line, in order from top to bottom, following the normal flow of your program (such as function calls, conditional logic, etc.).

Asynchronous operations are broken up into two phases: call and response. By definition, it’s impossible to know at what point in the program flow you’ll be when you receive an asynchronous response. There are a couple of popular ways to manage that uncertainty.

## Callbacks

Callbacks are functions that you pass as arguments to be invoked when the callee has finished its job.

Callbacks work great when you’re only waiting for one operation at a time, or when you only have one job to do when the response comes back

## Promises and Deferreds

Promises are objects that allow you to add callback functions to success or failure queues. Instead of calling a callback function in response to the completion of an asynchronous (or synchronous) operation, you return a promise, which allows you to register any number of callbacks.

The difference between a promise and a callback is that a promise is an object that gets returned from the callee, instead of a function that gets passed into and invoked by the callee. With promises, it’s much easier to add additional callbacks if you need them and to isolate those callbacks from each other so that the callback code can be organized independently of the initiating call.

A deferred is the object that controls the promise, with a few extra methods.

Promises really shine when you need to orchestrate a complex sequence of events. It’s sometimes necessary to gather data from multiple sources prior to getting data from yet another source.

---

# Objects

You may be aware that JavaScript is not a classical OO language. It’s a prototypal language.

## Prototypes

These allow you to clone instances of existing objects to create new ones and share generic methods on a delegate object.

A prototype is an object intended to model other objects after. It is similar to a class in that you can use it to construct any number of object instances, but different in the sense that it is an object itself. There are two ways that prototypes can be used: you can delegate access to a single, shared prototype object (called a delegate), or you can make clones of the prototype.

---

For large-scale applications, it’s usually also necessary that tiers can **scale horizontally**, meaning that as **demand increases**, you can add machines to a tier in order to improve its capacity to meet that demand.
