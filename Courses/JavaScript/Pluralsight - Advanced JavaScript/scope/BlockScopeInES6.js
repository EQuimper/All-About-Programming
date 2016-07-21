// Block Scope in ES6

/*
let: hijact the scope of whichever block we happen to be in and
add the variable to that block rather than to the enclosing function.
 */

function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) {
        console.log(bar.charAt(i));
    }
    console.log(i); // ReferenceError
}

function foo(bar) {
    if (bar) {
        let baz = bar;
        if (baz) {
            let bam = baz;
        }
        console.log(bam); // Error
    }
    console.log(baz); // Error
}

foo("bar");
