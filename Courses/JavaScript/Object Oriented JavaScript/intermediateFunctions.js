function Animal() {
    this.name = "Animal";

    this.toString = function () { // We overide here the function toString
        return "My name is " + this.name;
    };
}

Animal.prototype.sound = "Grrrrr";
Animal.prototype.getSound = function () {
    return this.name + " says " + this.sound;
}

function extend(Child, Parent) {
    var Temp = function () {};

    Temp.prototype = Parent.prototype;

    Child.prototype = new Temp();

    Child.prototype.constructor = Child;
}

function Deer() {
    this.name = "Deer";
    this.sound = "Snort";
}

// Much more cleaner that the mess we make in inheritance file
extend(Deer, Animal);

var elk = new Deer();

document.write(elk.getSound() + "<br />");
// Deer says Snort
