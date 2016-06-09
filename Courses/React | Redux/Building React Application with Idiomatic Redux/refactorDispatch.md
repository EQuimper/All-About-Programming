We can change this
```javascript
const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

```

To this

```javascript
const VisibleTodoList = connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList);
```
