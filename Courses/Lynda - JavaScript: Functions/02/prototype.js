var speak = function (saywhat) {
    console.log(saywhat);
}

var Dog = function () {
    var name, breed;
}

Dog.prototype.speak = speak;

var Cat = function () {
    var name, breed;
}

Cat.prototype.speak = speak;


firstDog = new Dog(); // Not obligated to use the () here

firstDog.name = "Rover";
firstDog.breed = "Doberman";

firstDog.speak('woof'); // woof

firstCat = new Cat(); // Not obligated to use the () here

firstCat.name = "Sniggle";
firstCat.breed = "Manx";

firstCat.speak('meow'); // meow
