var myVar = "A global variable";

function myFunction() {
    console.log(myVar); // undefined => give us hoisting
    var myVar = "A local variable";
    /* Result
    A local variable
     */
    console.log(myVar); // Here we got the local one
    console.log(window.myVar); // We got the global variable
}

myFunction();

console.log(myVar);

/* Result
A global variable
 */

// Here we get the first variable cause it's outside of the local scope
