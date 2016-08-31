// Every language can do a function like this
function triple(x) {
    return x * 3;
}

// But in functional programming, function are value so
var triple = function(x) {
    return x * 3;
};

var waffle = triple;

waffle(30); // Result: 90
