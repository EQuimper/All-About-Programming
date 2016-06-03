# Store

The store bind together the 3 principles of Redux:
1. Holds the current application state object
2. Allows you to dispatch actions
3. When you create it, you need to specify the reducer that tells how state is updated with actions.

## Store has 3 important methods
1. getState()
    > Retrieves the current state of the Redux store.
2. dispatch()
    > Dispatch actions to change the state of the application.
3. subscibe()
    > Registers a callback that the redux store will call any time an action has been dispatched.

## From scratch the store look like

```javascript
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({}); // dummy dispatch

  return { getState, dispatch, subscribe };

};
```
