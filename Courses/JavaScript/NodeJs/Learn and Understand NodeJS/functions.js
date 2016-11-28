// function statement
function greet() {
  console.log('hi');
}

greet(); // invoke function
/*
* hi
*/

// functions are first-class
function logGreetng(fn) {
  fn();
}

logGreetng(greet); // here we invoke the function greet
/*
* hi
*/

// function expression
var greetMe = function() {
  console.log('Hi Emanuel');
}

// It's first-class

greetMe();
/*
* Hi Emanuel
*/

logGreetng(greetMe);
/*
* Hi Emanuel
*/

// use a function expression on the fly
logGreetng(function() {
  console.log('Hello Hello');
});
/*
* Hello Hello
*/
