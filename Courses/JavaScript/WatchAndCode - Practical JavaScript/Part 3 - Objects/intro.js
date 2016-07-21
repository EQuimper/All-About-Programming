var mySelf = {
	name: 'Emanuel', 
	sayName: function () {
		// Here I want to call 'name' but im inside the object how can I do this ?
		// With the word this. Is referring the entire object
		console.log(this);
	}
};

mySelf.sayName();
/* Result
 { name: 'Emanuel', sayName: [Function] }
 */

// This is not what we want. With only this we call all the object
var mySelf = {
	name: 'Emanuel',
	sayName: function () {
		console.log(this.name);
	}
};
// name and sayName is property of the object 'mySelf'

mySelf.sayName();
/* Result
 Emanuel
 */

// Putting a function inside a object we call this a 'method'
// Method: property call a function