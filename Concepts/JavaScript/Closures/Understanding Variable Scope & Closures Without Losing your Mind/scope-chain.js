var myVar = "A global variable";

function grandParent() {
    function parent() {
        function child() {
            console.log(myVar);
        }
        child();
    }
    parent();
}
grandParent();

/* Result
A global variable
 */

// What happen here is he check the value of var inside his own scope
// If nothing he go check inside his parent etc etc
// Cause no parent have the var he got the global one

var myVar = "A global variable";

function grandParent() {
    var myVar = "A grandparent variable";
    function parent() {
        function child() {
            console.log(myVar);
        }
        child();
    }
    parent();
}
grandParent();

// Here we gonna get the `A grandparent variable`
// He always check for the closest to him

var myVar = "A global variable";

function grandParent() {
    var myVar = "A grandparent variable";
    function parent() {
        var myVar = "A parent variable";
        function child() {
            var myVar = "A child variable";
            console.log(myVar);
        }
        child();
        console.log(myVar);
    }
    parent();
    console.log(myVar);
}
grandParent();
console.log(myVar);

/* Result
 A child variable
 A parent variable
 A grandparent variable
 A global variable
 */

// Here we got the var where the function is call so he check is own scope
