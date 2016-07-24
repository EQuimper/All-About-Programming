var rooms = ['H1', 'H2', 'H3'];

var newRooms = rooms.map(function (rm) {
  if (rm === 'H3') return 'H4';
  return rm;
});

newRooms; // ['H1', 'H2', 'H4']

rooms; // ['H1', 'H2', 'H3']
