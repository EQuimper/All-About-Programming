// Come from the part 4
var todoList = {
	todos: [],
	displayTodos: function () {
		if (this.todos.length === 0) {
			console.log('Your todos list is empty!');
		} else {
			console.log('My todos:');
			// Show the todos.todoText
			for (var i = 0; i < this.todos.length; i++) {
				// Check if .completed is true
				if (this.todos[i].completed === true) { // We checked true cause the default is false
					console.log('(x)', this.todos[i].todoText)
				} else {
					console.log('( )', this.todos[i].todoText)
				}
			}
		}
	}
	,
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function (pos, todoText) {
		this.todos[pos].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function (pos) {
		this.todos.splice(pos, 1);
		this.displayTodos();
	},
	toggleCompleted: function (pos) {
		var todo = this.todos[pos];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

todoList.addTodo('banana');
todoList.addTodo('apple');

/* Result
 My todos:
 todoText: banana
 My todos:
 todoText: banana
 todoText: apple
 */

todoList.displayTodos(); // If we comment out the two add mehod before we got the todos.length === 0
/* Result
 Your todos list is empty!
 */

// With the add of the if statement about the completed property
/* Result
 My todos:
 ( ) banana
 My todos:
 ( ) banana
 ( ) apple
 My todos:
 ( ) banana
 ( ) apple
 */

todoList.toggleCompleted(1);
/* Result
 My todos:
 ( ) banana
 My todos:
 ( ) banana
 ( ) apple
 My todos:
 ( ) banana
 ( ) apple
 My todos:
 ( ) banana
 (x) apple
 */

todoList.addTodo('orange');
todoList.addTodo('pineaple');
todoList.toggleCompleted(2);
/* Result
 My todos:
 ( ) banana
 (x) apple
 (x) orange
 ( ) pineaple
 */
