var animals = [
    { name: 'Fluffykin', species : 'rabbit' },
    { name: 'Caro',      species : 'dog' },
    { name: 'Hamilton',  species : 'dog' },
    { name: 'Harold',    species : 'fish' },
    { name: 'Ursula',    species : 'cat' },
    { name: 'Jimmy',     species : 'dog' },
];

// We need the library underscore.js for reject

let isDog = animals.filter((animal) => animal.species === 'dog');

let otherAnimals = animals.reject(isDog);
console.log(isDog);
