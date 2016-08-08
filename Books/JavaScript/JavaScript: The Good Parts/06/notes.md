# Chapter 6: Arrays
---

An array is a linear allocation of memory in which elements are accessed by integers that are used to compute offsets.

JavaScript provides an object that has some array-like characteristics.

It is significantly slower than a real array.

---

# Array Literals

An array literal is a pair of square brackets surrounding zero or more values separated by commas.

Can appear anywhere an expression can appear

---

# Delete

Since JavaScript’s arrays are really objects, the delete operator can be used to remove elements from an array.

Unfortunately, that leaves a hole in the array.

---

# Enumeration

Since JavaScript’s arrays are really objects, the for in statement can be used to iter- ate over all of the properties of an array. Unfortunately, for in makes no guarantee about the order of the properties, and most array applications expect the elements to be produced in numerical order. Also, there is still the problem with unexpected properties being dredged up from the prototype chain.
