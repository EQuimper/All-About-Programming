The compiler declared everything first.

# Quiz

1. What type of scoping rule(s) does JavaScript have? Exceptions?

    - Lexical Scope
    - `Eval` and `With` are the cheating way

2. What are the different ways to create a new scope?

    - Function
    - Try Catch
    - {} + `let`

3. What's the difference between undeclared and undefined?

    - **Undefined**: is a value. So mean you have already declared the var. This is a empty placeholder.
    - **Undeclared**: it's never been declared yet

---

# Hoisting

This is when you use a var before declared it. The compiler need to go back to the top and find the declaration.

---

# Recursion

When a function call itself, until some terminated condition.

---

# Mutual recursion

Two or more functions calling each other

---

# *this* Keyword

Every function, while executing, has a reference to its current execution context, called `this`.

---

In javascript everything is references to a object or function.

---

# The new Keyword

In front of a function he do 4 things:

1. A brand-new empty object will be created
2. That object gets linked to to a different object.
3. Get bound as the `this` keyword for the purposes of that function call.
4. If that function does not otherwise return anything, then it will impicity insert a return `this`.

# Rules about `this`

1. Was the function called with `new`?
2. Was the function called with `call` or `apply` specifying an explicit `this`?
3. Was the function called via a containing/owning object (context)?
4. DEFAULT: global object (except strict mode)

---

# Quiz

1. What determines which object a functions `this` points to? What's the default?
    - New
    - Explicit binding with a call or apply or the bind
    - Implicit binding with an owning or containing object
    - Default rule
2. How do you `borrow` a function by implicit assignment of `this`?
    - We mutated an object to put a reference to that function on the object so that we could then say `object.method` name.
3. How do you explicitly bind `this`?
    - Call
    - Apply
4. How can you seal a specific `this` to a function? Why do that? Why not?
    - Using bind
    - If you want to be predictable
    - This is harder path much more better using lexical
5. How do you create a new `this`?
    > By using the `new` keyword.
