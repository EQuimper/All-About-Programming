const VisibleTodoList = connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList);
