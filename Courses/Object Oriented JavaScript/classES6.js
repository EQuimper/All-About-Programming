class Point {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    getPos() {
        return "X: " + this.xPos + " Y: " + this.yPos;
    }
}

var point = new Point(100, 200);

document.write("Point Pos : " + point.getPos() + "<br />");
// Point Pos : X: 100 Y: 200

class Animal {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return "Animal is name " + this.name;
    }

    static getAnimal() {
        return new Animal("No Name");
    }
}

class Dog extends Animal {
    constructor(name, owner) {
        super(name); // This initial name
        this.owner = owner;
    }

    toString() {
        return super.toString() + "<br />Dog is named " + this.name;
    }
}

var rover = new Dog("Rover", "Paul");

document.write(rover.name + " is owned by " + rover.owner + "<br />");
// Rover is owned by Paul
document.write(rover.toString() + "<br />");
// Animal is name is Rover
var bowser = new Animal();

document.write("Bowser info : " + bowser.toString() + "<br />");
// Bowser info : Animal is name No Name
