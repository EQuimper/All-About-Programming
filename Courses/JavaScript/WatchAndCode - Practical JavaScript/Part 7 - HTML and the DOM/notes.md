#### DOM
Document Object Model

Add the script for js at the end cause some time gonna cause issues cause the browser gonna run the js before the body.

You can look on the browser see the html by right-click + inspect on the page

We can get the document object inside the console with
 
    document

1. When you have more than one element to target like our button here use the html id on this tag.

2. After set a variable for this element with. 
Ex:

```javascript
document.getElementById('displayTodos');
```

3. Add a event on this button like click so you can add function on it.
Ex:

```javascript
displayTodos.addEventListener('click', function() {
    togolist.displayTodos();
});
```