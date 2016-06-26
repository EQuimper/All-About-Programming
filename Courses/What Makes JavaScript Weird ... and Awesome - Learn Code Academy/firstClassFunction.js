// A function can be pass as a argument

function add(first, second) {
    console.log(first + second);
}

add(2, 3); // 5
add(5, 10); // 15

/*>>>>>>=============================================<<<<<<*/

function add(first, second, callback) {
    console.log(first + second);
    callback();
}

add(2, 3, function () {
    console.log('done');
});
// 5
// done
add(5, 10, function () {
    console.log('done again');
});

// A function is basicaly a variable

function logDone() {
    console.log('log done');
}

add(5, 10, logDone);
// 15
// log done

// We can to use a if statement for the callback and only fire it when have one
function add(first, second, callback) {
    console.log(first + second);
    if (callback) {
        callback();
    }
}

add(5, 10);
// 15
