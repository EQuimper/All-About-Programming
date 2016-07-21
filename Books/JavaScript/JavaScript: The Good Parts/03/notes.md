# Objects

Numbers, strings, and booleans are object-like in that they have methods, but they are **immutable**. Objects in JavaScript are **mutable** keyed collections. In JavaScript, arrays are objects, functions are objects, regular expressions are objects, and, of course, objects are objects.

An object is a **container of properties**, where a property has a name and a value. Objects can containe other objects.

JavaScript includes a prototype linkage feature that allows one object to inherit the properties of another. When used well, this can reduce object initialization time and memory consumption.

---

# Object literals

Object literals provide a very convenient notation for creating new object values. An object literal is a pair of curly braces surrounding zero or more name/value pairs.

```js
var empty_object = {};

var stooge = {
    first_name: "Emanuel",
    last_name: "Quimper"
}
```

Objects can nest.

---

# Retrieval

Values can be retrieved from an object by wrapping a string expression in a `[ ]` suffix.

If the string expression is a constant, and if it is a legal JavaScript name and not a reserved word, then the `.` notation can be used instead.

---

# Update

A value in an object can be updated by assignment.

---

# Reference

Objects are passed around by reference.

---

# Prototype

Every object is linked to a prototype object from which it can inherit properties.

The prototype link has no effect on updating. When we make changes to an object, the object’s prototype is not touched.

The prototype relationship is a dynamic relationship. If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype.

---

# Reflection

The typeof operator can be very helpful in determining the type of a property.

The `hasOwnProperty` method, which returns true if the object has a particular property.

---

# Enumeration

The `for in` statement can loop over all of the property names in an object. There is no guarantee on the order of the names, so be prepared for the names to appear in any order.

By using for instead of for in, we were able to get the properties we wanted without worrying about what might be dredged up from the prototype chain, and we got them in the correct order.

---

# Delete

Can be used to remove a property from an object. It will not touch any of the objects in the prototype linkage.

---

# Global abatement

JavaScript makes it easy to define global variables that can hold all of the assets of your application. Unfortunately, global variables weaken the resiliency of programs and should be avoided.
