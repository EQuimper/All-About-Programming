var Dog = function() {
    var name, breed;
}

firstDog = new Dog;

firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;

secondDog.name = "Fluffy";
secondDog.breed = "Poodle"

console.log(firstDog.name); // Rover

// We can use inside the console chrome the command console.dir(firstDog);

console.log(secondDog.name); // Fluffy
