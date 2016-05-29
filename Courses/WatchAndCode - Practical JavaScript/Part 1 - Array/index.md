### Tips

#### Store Item
`var todos = ['item 1', 'item 2', 'item 3'];` This is a Array

#### Display Item
`console.log(todos);`

#### Add Item
Command push is use to add a item at the end of the array.
Ex: `todos.push('item 4');`

#### Edit Item
1. We need to grab the item inside the array
`todos[2]` Gonna give use the third todo inside todos
2. We need to set a new value for this todo
`todos[2] = 'item 3 updated`

#### Delete item
1. We need to know the item you want to deleted and use this index with .splice()
Ex: `todos.splice(2, 1);` This deleted the third item in the array.
.splice(Where to start deleted: Index, How many item to deleted)