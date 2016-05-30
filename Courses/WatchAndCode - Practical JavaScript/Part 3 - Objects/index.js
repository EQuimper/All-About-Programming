// Store data
var todoList = {
	todos: [
		'item 1',
		'item 2',
		'item 3'
	]
};
console.log(todoList);
/* Result
 { todos: [ 'item 1', 'item 2', 'item 3' ] }
 */
/*>>>>>>=============================================<<<<<<*/

// Display data
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
todoList.displayTodos();
/* Result
 My todos: [ 'item 1', 'item 2', 'item 3' ]
 */
/*>>>>>>=============================================<<<<<<*/

// Add data
var todoList = {
	todos: [
		'item 1',
		'item 2',
		'item 3'
	],
	displayTodos: function () {
		console.log('My todos:', this.todos);
	},
	// Add
	addTodo: function (todo) {
		this.todos.push(todo);
		this.displayTodos(); // We can call this method we the word this cause that inside the object
	}
};
todoList.addTodo('Banana');
/* Result
 My todos: [ 'item 1', 'item 2', 'item 3', 'Banana' ]
 */
/*>>>>>>=============================================<<<<<<*/

// Edit data
var todoList = {
	todos: [
		'item 1',
		'item 2',
		'item 3'
	],
	displayTodos: function () {
		console.log('My todos:', this.todos);
	},
	addTodo: function (todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	// Edit
	changeTodo: function (pos, newValue) {
		this.todos[pos] = newValue;
		this.displayTodos();
	}
};
todoList.changeTodo(0, 'item 1 updated');
/* Result
 My todos: [ 'item 1 updated', 'item 2', 'item 3' ]
 */
/*>>>>>>=============================================<<<<<<*/

// Delete data
var todoList = {
	todos: [
		'item 1',
		'item 2',
		'item 3'
	],
	displayTodos: function () {
		console.log('My todos:', this.todos);
	},
	addTodo: function (todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function (pos, newValue) {
		this.todos[pos] = newValue;
		this.displayTodos();
	},
	// Delete
	deleteTodo: function (pos) {
		this.todos.splice(pos, 1); // .splice() take the pos where to starte deleted and how many item to deleted
		this.displayTodos();
	}
};
todoList.displayTodos(); // My todos: [ 'item 1', 'item 2', 'item 3' ]
todoList.deleteTodo(1);
/* Result
 My todos: [ 'item 1', 'item 3' ]
 */
