// Store the data
var todos = ['item 1', 'item 2', 'item 3'];
/*>>>>>>=============================================<<<<<<*/

// Display the data
function displayTodos() {
	console.log('My todos:', todos);
}

displayTodos();
/* Result
 My todos: [ 'item 1', 'item 2', 'item 3' ]
 */
/*>>>>>>=============================================<<<<<<*/

// Add data
function addTodo() {
	todos.push('new todos');
}

addTodo();
console.log('My todos:', todos);
/* Result
 My todos: [ 'item 1', 'item 2', 'item 3', 'new todos', 'new todos' ]
 */
// But this is not best practice cause we make a function to display it
function addTodo() {
	todos.push('new todos');
	displayTodos(); // We can use function inside a other function
}

addTodo();
/* Result
 My todos: [ 'item 1', 'item 2', 'item 3', 'new todos', 'new todos' ]
 */
// But we don't want always add the item 'new todos' we want it to be customizable
// So we need to add a parameters
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

addTodo('Buy banana'); // So now we can add our own value
/* Result
 My todos: [ 'item 1', 'item 2', 'item 3', undefined, undefined, 'Buy banana' ]
 */
/*>>>>>>=============================================<<<<<<*/

// Edit data
function changeTodo() {
	todos[0] = 'item updated';
}

changeTodo();

displayTodos();
/* Result
 My todos: [ 'item updated', 'item 2', 'item 3', undefined, undefined, 'Buy banana' ]
 */

// But again this is not good practice cause we just updated the first item
// And we changed it always for 'item updated'

function changeTodo(pos, newValue) {
	todos[pos] = newValue;
	displayTodos();
}

changeTodo(2, 'apple');
/* Result
 [ 'item updated', 'item 2', 'apple', 'item 3', undefined, undefined, 'Buy banana' ]
 */
changeTodo(3, 'orange');
/* Result
 [ 'item updated', 'item 2', 'apple', 'orange', undefined, undefined, 'Buy banana' ]
 */
/*>>>>>>=============================================<<<<<<*/

// Delete data
function deleteTodo(pos) {
	todos.splice(pos, 1);
	displayTodos();
}

deleteTodo(4);
/* Result
 [ 'item updated', 'item 2', 'apple', 'orange', undefined, 'Buy banana' ]
 */
