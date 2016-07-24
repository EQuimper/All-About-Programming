# Immutable Data

Not immutable look this

```js
var rooms = ['H1', 'H2', 'H3'];

rooms[2] = 'H4';

rooms; // ['H1', 'H2', 'H4']
```

Immutable look like this

```js
var rooms = ['H1', 'H2', 'H3'];

var newRooms = rooms.map(function (rm) {
  if (rm === 'H3') return 'H4';
  return rm;
});

newRooms; // ['H1', 'H2', 'H4']

rooms; // ['H1', 'H2', 'H3']
```

Immutable avoid a lot of bug.

## Persistent data structures for efficient immutability

Because Immutable create all time a new array. Lost of time and space.

So that's why we make a tree where we can reuse old data.

*Data sharing*.
