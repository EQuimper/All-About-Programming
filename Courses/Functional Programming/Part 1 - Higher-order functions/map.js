var animals = [
    { name: 'Fluffykin', species : 'rabbit' },
    { name: 'Caro',      species : 'dog' },
    { name: 'Hamilton',  species : 'dog' },
    { name: 'Harold',    species : 'fish' },
    { name: 'Ursula',    species : 'cat' },
    { name: 'Jimmy',     species : 'dog' },
];

// With a for loop show the name look like
var names = [];
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
console.log(names);
/* Result
[ 'Fluffykin', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy' ]
*/
/*>>>>>>=============================================<<<<<<*/

// With map
var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species; // So we can transform it into a completed new object.
});
console.log(names);
/* Result
[ 'Fluffykin', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy' ]
2nd attemps with species
[ 'Fluffykin is a rabbit',
  'Caro is a dog',
  'Hamilton is a dog',
  'Harold is a fish',
  'Ursula is a cat',
  'Jimmy is a dog' ]
*/
/*>>>>>>=============================================<<<<<<*/

// With map ES6
let names = animals.map((a) => a.name);
console.log(names);
/* Result
[ 'Fluffykin', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy' ]
*/
