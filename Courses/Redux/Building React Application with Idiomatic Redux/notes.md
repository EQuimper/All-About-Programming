### Refactor arrow function

We have example
```javascript
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: (nextTodoId++).toString(),
        text
    };
}
```

We can remove return cause this is the only statements inside this block

```javascript
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text
});
```

That look like object expression

You can change too this arrow function

```javascript
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};
```

For 

```javascript
const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});
```

---

# Refactor the folder structure

Dan create a Root component where he put inside the components folder Root.js. Inside this one he import the provider and inside the provider he create the routes.

He create to a configureStore.js file and put everything about the store inside this one. So the index app look nicer.

For get the App compoenent be the center of the application, with react-router, the root component.
Ex:

```javascript
const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                Can have the child here
            </Route>
        </Router>
    </Provider>
);
```

# Redux navigation with React Router

In his todo app he want the filter to show inside the url. So inside the route he add a params call filter. But this params is not obligated so he put the params inside ().
Ex:

```javascript
<Route path="/(:filter)" component={App} />
```

- See the filterLink [example] (https://github.com/EQuimper/all-about-javascript/blob/master/Courses/Redux/Building%20React%20Application%20with%20Idiomatic%20Redux/exampleFilterLink.md)
- See the shortHand notation for [mapDispatchToProps] (https://github.com/EQuimper/all-about-javascript/blob/master/Courses/Redux/Building%20React%20Application%20with%20Idiomatic%20Redux/refactorDispatch.md)

Need to use more the react-router params. This is the source of true for the url.
