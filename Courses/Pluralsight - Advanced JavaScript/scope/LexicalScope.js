// Lexical Scope => Compile time Scope

var bar = "bar";

function foo(str) {
    // eval take a string and treats the string contents
    // as if that had been code that existed at that point in
    // the compilation
    eval(str); // cheating! That slow the code
    console.log(bar); // 42
}

foo("var bar = 42;");

// Don't use set timeout with a string parameters.
// Can still use with functions args but not with string.

// with keyword is more bad than eval keyword
