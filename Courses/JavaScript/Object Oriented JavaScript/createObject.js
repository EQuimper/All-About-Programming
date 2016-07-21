// Standard object
var customer = {
    name: "Tom Smith",
    speak: function () {
        return "My name is " + this.name;
    },

    address: {
        street: "123 Main St",
        city: "Pittsburgh",
        state: "PA"
    }
};

// For show on the html
document.write(customer.speak() + "<br />");
/* Result
 My name is Tom Smith
 */

document.write(customer.name + " live at " + customer.address.street + "<br />");
/*Result
 Tom Smith lives at 123 Main St
 */

customer.address.country = "US";

document.write(customer.address.country + "<br />");
/*Result
 US
 */

// Constructor
function Person(name, street) {
    this.name = name;
    this.street = street;

    this.info = function () {
        return "My name is " + this.name + " and I live on " + this.street;
    }
}

var bobSmith = new Person("Bob Smith", "234 main st");

document.write(bobSmith.info() + "<br />");
/*Result
 My name is Bob Smith and I live on 234 main st
 */

// We can see if the object is a instanceof the constructor with
bobSmith instanceof Person; // true

function changeName(person) {
    person.name = "Sue Smith";
}

changeName(bobSmith);

document.write("Bob became " + bobSmith.name + "<br />");
// Bob became Sue Smith

var person1 = new Person("Paul", "123 Main");
var person2 = new Person("Paul", "123 Main");

document.write("Are they equal " + (person1 == person2) + "<br />");
// Are they equal false
