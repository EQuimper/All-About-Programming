// Come from the part 7
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
                if (this.todos[ i ].completed === true) { // We checked true cause the default is false
                    console.log('(x)', this.todos[ i ].todoText)
                } else {
                    console.log('( )', this.todos[ i ].todoText)
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
        this.todos[ pos ].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (pos) {
        this.todos.splice(pos, 1);
        this.displayTodos();
    },
    toggleCompleted: function (pos) {
        var todo = this.todos[ pos ];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    // Toggle All
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // Get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[ i ].completed === true) {
                completedTodos++; // Add one to the completedTodos variable
            }
        }
        // Case 1: If everything's true, make everything false.
        if (completedTodos === totalTodos) {
            // Make everything false
            for (var i = 0; i < totalTodos; i++) {
                this.todos[ i ].completed = false;
            }
        } else { // Case 2: Otherwise, make everything true.
            for (var i = 0; i < totalTodos; i++) {
                this.todos[ i ].completed = true;
            }
        }
        this.displayTodos();
    }
};

// Refactor the code for the button
var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    // Add item
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        // For reset the input after submit
        addTodoTextInput.value = '';
    },
    // Edit item
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        // For reset the input after submit
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        // For reset the input after submit
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        // For reset the input after submit
        toggleCompletedPositionInput.value = '';
    },
    toggleAll: function () {
        todoList.toggleAll();
    }
};
