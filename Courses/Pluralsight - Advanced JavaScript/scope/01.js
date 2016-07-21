// JavaScript compile all global variables.
// He passed through the function and comeback later, only when we
// need it.
var foo = "bar";

// After the compiler check the var foo here in the scope bar
function bar() {
    // Declared local `shadowing`
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        // That come a global var cause we are not in strict mode. The compiler create us a global variable because
        // he don't find it
        // This is a big problem so that's why we need to use var for
        // keep it in the local scope
        bam = "yay";
    }
    bar();
}
// LHS left-hand-side => RHS right-hand-side

bar(); // This is a RHS

foo; // bar
// This is the global one

bam; // yay

baz();
