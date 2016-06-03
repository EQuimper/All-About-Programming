Takes a Todo item and toggles its "completed" field.


ES6
```javascript
const toggleTodo = (todo) => {
    return Object.assign({}, todo, {
        completed: !todo.completed
    });
};
```
Note how the argument order to Object.assign() corresponds to the JavaScript assignment operator order.

The left argument is the one whose properties are going to be assigned, so we pass in an empty object ({}) because it will be mutated (remember, we don't want to mutate any existing data).

ES7
```javascript
const toggleTodo = (todo) => {
    return {
        ...todo,
        completed: !todo.completed
    };
};
```
