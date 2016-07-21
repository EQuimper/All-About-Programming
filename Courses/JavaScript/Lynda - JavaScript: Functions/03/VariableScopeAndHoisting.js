function myDog() {
    var dogName = 'Fido';
    console.log(dogName + ' says woof');
}

myDog(); // Fido says woof

/****************/

function myDog() {
    var dogName = 'Fido';
}

console.log(dogName + ' says woof');
myDog(); // dogName is not defined

/****************/

// Scope chain
function myDog() {
    var dogName = 'Fido';
    function otherDog() {
        var dogName = 'Roover';
        console.log(dogName + ' says woof');
    }
    otherDog();
}

myDog(); // Roover says woof

/****************/

function myDog() {
    dogName = 'Fido'; // We globalize the variable here
    // That can cause problem
}

myDog();
console.log(dogName + ' says woof'); // Fido says woof
