## Arrow Function

```javascript
var helloWorld = function() {
  console.log('Hello World');
}
```

Can be change for:

```javascript
const helloWorld = console.log('Hello World');
```

If everything is in the same line we don't need to write return. That do by
default.

Ex:

```javascript
var deliveryBoy = {
    name: "Emanuel",
    
    handleMessage: function(message, handler) {
      handler(message);
    },
    
    receive: function() {
      // Cause of the scope we to that = this
      var that = this; // We do this cause we want to get the name of the parent.
      
      this.handleMessage("Hello", function(message) {
        that.name; // get the proper name
        
        console.log(message + that.name);
      });
    }
}

deliveryBoy.receive();
```

But we the arrow function

```javascript
var deliveryBoy = {
    name: "Emanuel",
    
    handleMessage: function(message, handler) {
      handler(message);
    },
    
    receive: function() { // Cause of the arrow function we passed in the lexical scope
      this.handleMessage("Hello", message => console.log(message + this.name)); // Refer to scope outside of this function
    }
}

deliveryBoy.receive();
```

---

## The let keyword

```javascript
var message = "hi";

{
    var message = "bye";
}

console.log(message); // bye
```

But with let we gonna get `hi` cause let + {} make a new scope

```javascript
let message = 'hi';

{
    let message = 'bye';
}
console.log(message); // hi
```

Another example:

```javascript
var fs = [];

for (var i = 0; i < 10; i++) {
    fs.push(function() {
      console.log(i);
    });
}

fs.forEach(function(f) {
  f();
});

/*
10
10
10
10
10
10
10
10
10
 */
```

But with let

```javascript
var fs = [];

for (let i = 0; i < 10; i++) {
    fs.push(function() {
      console.log(i);
    });
}

fs.forEach(function(f) {
  f();
});

/*
1
2
3
4
5
6
7
8
9
 */
```

With let we can declare it inline not like we did with `var` when we
are afraid about hosting.

---

## Default Values for Function Parameters

```javascript
function greet(greeting, name) {
  console.log(greeting + ", " + name);
}

greet(); // undefined, undefined
```

```javascript
function greet(greeting, name = "Emanuel") {
  console.log(greeting + ", " + name);
}

greet(); // undefined, Emanuel
```

```javascript
function greet(greeting, name = "Emanuel") {
  console.log(greeting + ", " + name);
}

greet("Hello"); // Hello, Emanuel
```

```javascript
function greet(greeting, name = "Emanuel") {
  console.log(greeting + ", " + name);
}

greet("Hello", "Bill"); // Hello, Bill
```

```javascript
function receive(complete) {
  complete();
}

receive(); // undefined is not a function
```

```javascript
function receive(complete) {
  complete();
}

receive(function() {
  console.log("complete");
}); // complete
```

But in ES6 we can do 

```javascript
const receive = (complete = () => console.log("complete")) => complete();

receive(); // complete
```

---

## Const Declarations

Const is read-only, so we can't reassign it to a other value.

But we can do something like 

```javascript
const Value = {};

Value.foo = 'bar';

console.log(`Value is ${Value}`); // Value is { foo: 'bar' }
```

It's a good idea to use const for API_KEY etc. We use const for be sure we not
later reassign the value.

---

## Shorthand Properties

```javascript
let firstName = "Emanuel";
let lastName = "Quimper";

let person = { firstName, lastName };

console.log(person); // { firstName: "Emanuel", lastName: "Quimper" }
```
