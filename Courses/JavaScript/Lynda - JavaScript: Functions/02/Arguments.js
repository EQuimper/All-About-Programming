var plus = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum;
}

console.log(plus(2, 2)); // 4
console.log(plus(2, 2, 2)); // 6
console.log(plus(2, 2, 2, 2)); // 8
