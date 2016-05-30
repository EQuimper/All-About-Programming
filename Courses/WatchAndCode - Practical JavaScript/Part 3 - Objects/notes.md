### What's an object?
Object is use in JavaScript for group related data and function
Ex:
> #### Computer Object
    - operatingSystem: mac,
    - screenSize: 15 inches,
    - purchaseYear: 2014

But we need to have curly braces for be an object
Ex: 
> {
      operatingSystem: 'mac',
      screenSize: '15 inches',
      purchaseYear: 2014
  }

If we want to play with we need to use a variable
Ex:
``` javascript
var myComputer = {
   operatingSystem: 'mac',
   screenSize: '15 inches',
   purchaseYear: 2014
}
```

If I want to see the object
`myComputer`

If I want to see something in the object I need to use dot
`myComputer.screenSize` => `"15 inches"`

If I want to use something inside the same object I need to use the word this
Ex:
``` javascript
var todoList = {
	todos: [
		'item 1',
		'item 2',
		'item 3'
	],
	// Display
	displayTodos: function () {
		console.log('My todos:', this.todos);
	}
};
```