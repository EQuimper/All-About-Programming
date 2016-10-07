function talk() {
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

cat.talk() // talk is not a function
Object.setPrototypeOf(cat, animal)
cat.talk() // meow!
