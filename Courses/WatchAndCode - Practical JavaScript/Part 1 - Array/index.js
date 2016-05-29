// This is an Array
var todos = ['item 1', 'item 2', 'item 3'];
// Reference the array with the variable (var) name
console.log('My Todos:', todos);
/* Result:
 Todos : [ 'item 1', 'item 2', 'item 3' ]
 */

// Add
todos.push('item 4');
console.log('My Todos:', todos);
/* Result:
 My Todos: [ 'item 1', 'item 2', 'item 3', 'item 4' ]
 */

// Edit
// If I want to edit 'item 3'
todos[2]; // Grab the item
todos[2] = 'item 3 updated'; // Change the value need the =
console.log('My Todos:', todos);

// Delete
todos.splice(0, 1); // Deleted the first item
console.log('My Todos:', todos);
/* Result
 My Todos: [ 'item 2', 'item 3 updated', 'item 4' ]
 */
todos.splice(1, 1); // Delete the 'item 3 updated'
console.log('My Todos:', todos);