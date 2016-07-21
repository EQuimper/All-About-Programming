// Declation Expression
function plus(a, b) {
    var sum = a + b;
    return sum;
}

plus(3, 3);

// Definition Expression
var plus = function(a, b) { // Sometime call a function literal
    return console.log(a + b);
};

plus(2, 2);
// Assigning function to expressions
// Anonymous functions
// Names can be useful
// More flexible than expressions
// Can be invoked immediately
// Can initialize values immediately
// Useful when needed once

// If we want to invoked the function immediately put () a the end
var plus = function(a, b) {
    return console.log(a + b);
}(2, 2); // Here we initialize values immediately
