// Come from the part 7
var todoList = {
	todos: [],
	displayTodos: function () {
		debugger;
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
	},
	addTodo: function (todoText) {
        debugger;
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function (pos, todoText) {
        debugger;
		this.todos[pos].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function (pos) {
        debugger;
		this.todos.splice(pos, 1);
		this.displayTodos();
	},
	toggleCompleted: function (pos) {
        debugger;
		var todo = this.todos[pos];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	// Toggle All
	toggleAll: function () {
		debugger;
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// Get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++; // Add one to the completedTodos variable
			}
		}
		// Case 1: If everything's true, make everything false.
		if (completedTodos === totalTodos) {
			// Make everything false
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else { // Case 2: Otherwise, make everything true.
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
// 2. We want to get access to the toggle all button.
var toggleAllButton = document.getElementById('toggleAllButton');
// 3. We want to run displayTodos method, when someone clicks the display todos button.
displayTodosButton.addEventListener('click', function () {
	todoList.displayTodos();
});
// 4. We want to run toggleALl method, when someone clicks the toggle all button.
toggleAllButton.addEventListener('click', function () {
	todoList.toggleAll();
});
