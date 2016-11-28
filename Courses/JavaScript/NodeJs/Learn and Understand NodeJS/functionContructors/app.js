function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');
console.log(john.firstname);
/*
* John
*/

john.greet();
/*
* Hello, John Doe
*/

var jane = new Person('Jane', 'Doe');
jane.greet();
/*
* Hello, Jane Doe
*/
