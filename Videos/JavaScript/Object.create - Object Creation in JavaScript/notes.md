# Object.create()

Creates a new Object with the prototype set to a certain object.

```js
const cat = { // Simple object literal
  makeSound: function() {
    console.log(this.sound);
  }
}

const mark = Object.create(cat);
mark.sound = 'mewuuUUF';
mark.makeSound(); // mewuuUUF

const waffles = Object.create(cat);
waffles.sound = 'mrrrrrrroooow';
waffles.makeSound(); // mrrrrrrroooow

console.log('Is mark a cat?', cat.isPrototypeOf(mark)); // true
```

This is not a copy but they have reference to the property.

## Why does Object.create() exist?

More natural to the prototype model (than "new")

More perfomant than `.setPrototypeOf()`

## How to use Object.Create()

```js
const cat = {
  init: function(sound) {
    this.sound = sound;
    return this;
  },
  makeSound: function() {
    console.log(this.sound);
  }
}

const mark = Object.create(cat).init('meow').makeSound(); // meow
```
