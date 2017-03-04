/**
 * Factory Pattern
 */
const peopleFactory = function(name, age, location) {
  const temp = {};

  temp.name = name;
  temp.age = age;
  temp.location = location;

  temp.printPeople = function() {
    return console.log(`Hello ${this.name}, ${this.age} who came from ${this.location}`);
  }

  return temp;
}

const me = peopleFactory('Bob', 20, 'Canada');

me.printPeople()

/**
 * Constructor Patter
 */
const personConstructor = function(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  this.printPerson = function() {
    return console.log`Hello ${this.name}, ${this.age} who came from ${this.location}`;
  }
}

const you = new personConstructor('Luc', 25, 'USA');

/**
 * Prototype Pattern
 */
const peopleProto = function(){};

peopleProto.prototype.name = 'no name';
peopleProto.prototype.age = 0;
peopleProto.prototype.city = 'no city';
peopleProto.prototype.print = function() {
  return console.log(`Hello ${this.name}, ${this.age} who came from ${this.city}`);
}

const people1 = new peopleProto();

people1.name = 'Yan';
people1.age = 30;
people1.city = 'Quebec';

console.log(people1);

console.log('name' in people1); // true

/**
 * Dynamic Proto
 */
const peopleDynamicProto = function(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  if (typeof this.printPeople !== 'function') {
    peopleDynamicProto.prototype.print = function() {
      return console.log(`Hello ${this.name}, ${this.age} who came from ${this.city}`);
    };
  }
}
