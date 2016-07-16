(function () {
    var a = 1; // This var is protected inside this function
    console.log('foo');
})(); // foo

console.log(a); // Throw a error
