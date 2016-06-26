function getSum(num1, num2) {
    return num1 + num2;
}

document.write("Num of arguments" + getSum.length + "<br />");
// Num of arguments 2

function Mammal(name) {
    this.name = name;
    this.getInfo = function () {
        return "The mammals name is " + this.name;
    }
}

Mammal.prototype.sound = "Grrrr";

Mammal.prototype.makeSound = function () {
    return this.name + " says " + this.sound;
}

var grover = new Mammal("Grover");

document.write(grover.makeSound() + "<br />");
// Grover says Grrrr

for (var prop in grover) {
    document.write(prop + " : " + grover[prop] + "<br />");
}
/*Result
 name : Grover
 getInfo : function(){ return "The mammals name is " + this.name; }
 sound : Grrrr
 makeSound : function(){ return this.name + " says " this.sound; }
 */

document.write("name Property of grover : " + grover.hasOwnProperty("name") + "<br />");
// name Property of grover : true

document.write("sound Property of Grover : " + grover.hasOwnProperty("sound") + "<br />");
// sound Property of Grover : false
// Because we add that in the prototype

Array.prototype.inArray = function inArray(value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
}

var sampleArray = [1, 2, 3, 4, 5];

document.write("3 in array " + sampleArray.inArray(3) + "<br />");
// 3 in array true
