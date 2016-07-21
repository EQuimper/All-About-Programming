function Animal() {
    this.name = "Animal";

    this.toString = function () { // We overide here the function toString
        return "My name is " + this.name;
    };
}

function Canine() {
    this.name = "Canine"
}

function Wolf() {
    this.name = "Wolf";
}

Canine.prototype = new Animal(); // So now the Canine is a Animal Object

Wolf.prototype = new Canine(); // Same thing here but with the Canine Object assign to it

// We need this when we overide a prototype
Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();

document.write(arcticWolf.toString() + "<br />");
// My name is Wolf

document.write("Wolf instance of Animal : " + (arcticWolf instanceof Animal) + "<br />");
// Wolf instance of Animal : true

Animal.prototype.sound = "Grrrrr";
Animal.prototype.getSound = function () {
    return this.name + " says " + this.sound;
}

Canine.prototype.sound = "Woof";
Wolf.prototype.sound = "Grrrr Woof";

document.write(arcticWolf.getSound() + "<br />");
// Wolf says Grrrr Woof

function Rodent() {
    this.name = "Rodent";
}

function Rat() {
    this.name = "Rat";
}

Rodent.prototype = new Animal();

Rat.prototype = Rodent.prototype;

Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

document.write(caneRat.toString() + "<br />");
// My name is Rat
