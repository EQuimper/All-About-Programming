var animals = [
    { name: 'Fluffykin', species : 'rabbit' },
    { name: 'Caro',      species : 'dog' },
    { name: 'Hamilton',  species : 'dog' },
    { name: 'Harold',    species : 'fish' },
    { name: 'Ursula',    species : 'cat' },
    { name: 'Jimmy',     species : 'dog' },
];

// With a for loop we do
var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i]);
    }
}
console.log(dogs);
/* Result
[ { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Jimmy', species: 'dog' } ]
*/
/*>>>>>>=============================================<<<<<<*/
// With the filter function
var dogs = animals.filter(function(animal) {
    return animal.species === 'dog';
});
console.log(dogs)
/* Result
[ { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Jimmy', species: 'dog' } ]
*/
/*>>>>>>=============================================<<<<<<*/
// With the filter function ES6
let dogs = animals.filter((a) => a.species === 'dog');
console.log(dogs);
/* Result
[ { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Jimmy', species: 'dog' } ]
*/
