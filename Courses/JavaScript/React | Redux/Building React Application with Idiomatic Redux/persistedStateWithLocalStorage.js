// localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
}

// store.js
store.subscribe(throttle(() => { // we need throttle cause stringify is heavy
  saveState({
    todos: store.getState().todos
  });
}, 1000));

// for id look node-uuid
