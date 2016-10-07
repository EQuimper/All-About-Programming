let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk() // 'woof'

let talkFunction = dog.talk
talkFunction() // undefined cause the dog is not bind

let boundFunction = talkFunction.bind(dog)
boundFunction() // 'woof'

let button = document.getElementById('myNiceButton')

button.addEventListener(
  'click',
  dog.talk.bind(dog)
)

let talk = function() {
  console.log(this.sound)
}

let boromir = {
  sound: 'Hello World'
}

boromir.speak = talk.bind(boromir)

let blabber = boromir.speak

blabber()
