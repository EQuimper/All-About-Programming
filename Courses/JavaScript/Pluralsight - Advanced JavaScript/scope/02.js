var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        foo;
    }
    baz();
};

foo();
bar(); // Error!

// 3 bad things happen with anonymous function expression

// 1. No way inside the function to refer to ourselves.
// 2. Don't play well in debugging.
// 3. Self documented code

// Named function > anonymous
