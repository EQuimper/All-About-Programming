// Come from the part 8
var todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (pos, todoText) {
        this.todos[ pos ].todoText = todoText;
    },
    deleteTodo: function (pos) {
        this.todos.splice(pos, 1);
    },
    toggleCompleted: function (pos) {
        var todo = this.todos[ pos ];
        todo.completed = !todo.completed;
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
    }
};

// Refactor the code for the button
var handlers = {
    // Add item
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        // For reset the input after submit
        addTodoTextInput.value = '';
        // Update what we show
        view.displayTodos();
    },
    // Edit item
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        // For reset the input after submit
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        // Update what we show
        view.displayTodos();
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        // For reset the input after submit
        deleteTodoPositionInput.value = '';
        // Update what we show
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        // For reset the input after submit
        toggleCompletedPositionInput.value = '';
        // Update what we show
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        // Update what we show
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; // That clear the html for be sure that reflect the number of real item
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[ i ];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
