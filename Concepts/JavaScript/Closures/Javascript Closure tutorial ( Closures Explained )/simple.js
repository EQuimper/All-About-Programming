var passed = 3;

var addTo = function () {
    var inner = 2;

    return passed + inner;
};

console.log(addTo());

// Yes this is a closures too. But a simple one
// What the function do is looking inside him if he can find the variable. If not he try outside.
// That's why we call this a closures too
