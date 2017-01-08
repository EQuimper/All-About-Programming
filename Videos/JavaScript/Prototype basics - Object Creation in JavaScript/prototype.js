// function talk(sound) {
//   console.log(sound);
// }

// talk('woof');

function talk() {
  console.log(this.sound);
}

let animal = {
  talk,
}

let cat = {
  sound: 'meow!'
}

let dog = {
  sound: 'woof!'
}

let prarieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase());
  }
}

Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(prarieDog, dog);

cat.talk(); // meow!
dog.talk(); // woof!
prarieDog.howl(); // WOOF!
