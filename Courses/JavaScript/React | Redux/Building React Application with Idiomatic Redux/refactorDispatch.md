We can change this
```js
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

```js
const VisibleTodoList = connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList);
```
