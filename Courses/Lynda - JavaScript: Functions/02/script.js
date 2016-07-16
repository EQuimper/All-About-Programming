var calc = {
    status: 'Awesome',
    plus: function (a, b) {
        return (
            console.log(this), // Not the global object just the local one
            console.log(a + b), // 4
            console.log(arguments), // [2, 2]
            console.log(this.status) // Awesome
        )
    }
}

calc.plus(2, 2);
