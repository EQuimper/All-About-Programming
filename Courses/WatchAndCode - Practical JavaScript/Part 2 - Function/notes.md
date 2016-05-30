### Function are like recipes

Ex:
> makeTurkeySandwich
    - Get one slice of bread.
    - Add turkey.
    - Put a slice of bread on top.

Ex:
``` javascript
function makeTurkeySandwich() {
    Get one slice of bread;
    Add turkey;
    Put a slice of bread on top;
}
```

In the real life you say make a turkey sandwich.

But in JavaScript you need to call the function.

Ex:
``` javascript
makeTurkeySandwich(); // This is called a function
```

---

Ex: 
``` javascript
// Create a function for make a sandwich.
function makeSandwichWith(filing) {
	console.log('We need to have', filing); // filing it's a parameters
}

makeSandwichWith('Ham'); // Call the function with a arguments gonna be the filing.
/* Result
 We need to have Ham
 */ 
```