function plus(a, b) {
    return ( // Some use the return method as a function
        console.log(a + b),
        console.log(this),
        console.log(arguments)
    )
}

plus(2, 2);
