// example of redux-logger

console.group(action.type);
console.log('%c prev state', 'color: gray', store.getState());
console.log('%c action', 'color: blue', action);
// console.log now provide color with %c and the color as second args
console.log('%c');

console.groupEnd(action.type);
