var addTo = function(passed) {

    var add = function(inner) {
        return passed + inner;
    };

    return add;
};

console.log(addTo());
