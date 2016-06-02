# Some nice tips about the real life developer

- Write code for they work first
- After you refactor it
- Always consider optimisation code

# Requirement for this section

- It should have working controls for .addTodo
- It should have working controls for .changeTodo
- It should have working controls for .deleteTodo
- It should have working controls for .toggleCompleted

For get value from a input you can use
```javascript
addTodo: function() {
    var testInputValue = document.getElementById('testInputValue');
    todoList.addTodo(testInputValue.value);
    testInputValue = ''; // That clear the input
}
```
