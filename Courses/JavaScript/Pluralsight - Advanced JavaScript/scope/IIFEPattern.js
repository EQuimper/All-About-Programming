// IIFE PATTERN
var foo = "foo";

(function () { // Declaration
    var foo = "foo2"; // Local scope we don't pollute the global var
    console.log(foo) // "foo2"
})(); // Here with the set of () the function is executed

console.log(foo); // "foo"

// A new function give us a new scope block

// IIFE = Imediately Invoke Function Expression
