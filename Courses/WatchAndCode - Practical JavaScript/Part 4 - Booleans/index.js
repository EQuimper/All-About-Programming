// Come from the part 3
var todoList = {
	// We removed this cause now we don't want simple value
	// todos: [
	// 	'item 1',
	// 	'item 2',
	// 	'item 3'
	// ],
	todos: [], // This call a empty array
	displayTodos: function () {
		console.log('My todos:', this.todos);
	},
	addTodo: function (todoText) { // addTodo('hi') => todoText = hi
		this.todos.push({
			todoText: todoText, // We want the todoText = the todoText we put in the parameters
			completed: false // By default we want this false
		});
		this.displayTodos();
	},
	changeTodo: function (pos, todoText) { // We change the params newValue for todoText = more explicit
		// this.todos[pos] = todoText; We can't use this cause this is a object we need to get specific prop
		this.todos[pos].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function (pos) {
		this.todos.splice(pos, 1); // .splice() take the pos where to starte deleted and how many item to deleted
		this.displayTodos();
	},
	// Change the completed property
	toggleCompleted: function (pos) {
		var todo = this.todos[pos]; // We grab the item here and save some typo
		todo.completed = !todo.completed; // The opposite of what it is right now ex true to false
		this.displayTodos();
	}
};

todoList.addTodo('this is an object');
/* Result
 My todos: [ { todoText: 'this is an object', completed: false } ]
 */
todoList.changeTodo(0, 'I change this object');

todoList.toggleCompleted(0); // My todos: [ { todoText: 'I change this object', completed: false } ]
/* Result
 My todos: [ { todoText: 'I change this object', completed: true } ]
 */
todoList.toggleCompleted(0); // My todos: [ { todoText: 'I change this object', completed: true } ]
/* Result
 My todos: [ { todoText: 'I change this object', completed: false } ]
 */