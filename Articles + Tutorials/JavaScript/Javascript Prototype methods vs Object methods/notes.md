# Javascript Prototype methods vs Object methods

In JavaScript, when you define an object, you can attach it’s functions in two different ways.

1. Inside object’s constructor function, using `this.func = function(){...}`
2. Using prototype. i.e. `Obj.prototype.func = function() {...}`.

In both approaches, the function `func()` will be accessible to all the instances of your object.

But which one is the best way to use?

In short: Use `prototype` - which is effective for most cases. If your objective is to share common functionality between your object instances, then `prototype` is the way to go.

1. Modifying the common functionality is easy with Prototype

When you use `prototype` to attach common functions to objects, it is easy to modify the common logic even after the instances are created. The old and new objects will use the updated code. But this may not be possible if you attach the common code to each object instance, using `this.func()`.
Let’s see this with an example.

```js
function Parent(gender){
  this.gender = gender;

  // attach the common function to each object instance.
  this.yellAtChild = function(){
    console.log('Somebody gonna get a hurt real bad!');
  }
}

// Let's create dad and mom and start yelling at kids.
var dad = new Parent('male');
var mom = new Parent('female');
dad.yellAtChild(); // Somebody gonna get a hurt real bad!
mom.yellAtChild(); // Somebody gonna get a hurt real bad!

// but, Russell has decide to sue you if you use his catch phrase.
// Let's try to tell our already created dad & mon to use different phrase.

// ERROR: Not possible to do this way.
Parent.yellAtChild = function() { .... }

// You need to override the `yellAtChild` method for each object instance.
dad.yellAtChild = function(){
  console.log('Shut up!');
};
mom.yellAtChild = function(){
  console.log('Go to bed!');
}
dad.yellAtChild(); // Shut up!
mom.yellAtChild(); // Go to bed!
```

As you can see, if you decide to change the common logic, you can not easily update the object methods since they are already created. You need to modify each and every instance of that object which is tedious.

Let’s see the same example, but this time with `prototype`.

```js
function Parent(gender){
  this.gender = gender;
}

// Attach the common function to prototype.
Parent.prototype.yellAtChild = function(){
  console.log('Somebody gonna get a hurt real bad!');
};

// Let's create dad and mom and start yelling at kids.
var dad = new Parent('male');
var mom = new Parent('female');
dad.yellAtChild(); // Somebody gonna get a hurt real bad!
mom.yellAtChild(); // Somebody gonna get a hurt real bad!

// but, Russell has decide to sue you if you use his catch phrase.
// Simple: Just modify the function at Parent.prototype.

Parent.prototype.yellAtChild = function(){
  console.log('You are grounded.');
};

dad.yellAtChild(); // You are grounded
mom.yellAtChild(); // You are grounded
```

So, all the changes that you make to functions in `prototype` will reflect in all the instances of that object. Even for the new objects that you create will use the modifed method.

2. Prototype is fast and memory efficient.

When you attach methods to object instances, then each instance will have it’s own copy of the method. This involves the system processing time and the memory.
But, when you attach the method to object’s `prototype`, then only one version of the method exists. This doesn’t need as much processing time and memory when compared to the above approach.

```js
var Parent = function(){
  this.yellAtKid = function(){
    console.log('Somebody gonna get a hurt real bad!');
  };
};
console.profile('Object Methods');
var dads = [];
for(var i = 0; i <= 10000000; i++) {
  dads.push(new Parent());
}
console.profileEnd(); // 4903.267ms
```

But with prototype

```js
var Parent = function(){
};

Parent.prototype.yellAtKid = function(){
  console.log('Somebody gonna get a hurt real bad!');
};

console.profile('Prototype Methods');
var dads = [];
for(var i=0; i<=10000000; i++){
  dads.push(new Parent());
}
console.profileEnd(); // 3271.413ms
```

I hope that explains why `prototype` is best way to share common logic between your javascript objects.
