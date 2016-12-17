# Lambda

A lambda is a function that is used as data.

It is common to confuse the words “closure” and “lambda” as synonyms. That is not accurate. Not all lambdas are closures, and not all closures are lambdas. A closure is created when a function references data that is contained outside the function scope. A lambda is a function that is used as a value (assigned to a variable or passed between functions). Some languages support lambdas but do not support closures.

Higher-order functions are functions that consume or return functions as data. Lambdas get passed to and/or returned from higher order functions, and a function might be both a lambda and a higher order function, but not all higher order functions are lambdas.

*If a function is used as an argument or return value, it’s a lambda.*

---

Objects don’t guarantee any particular order; arrays do.
