var type = 'coke';

var drink;

switch(type) {
  case 'coke':
    drink = 'Coke';
    break;
  case 'pepsi':
    drink = 'Pepsi';
    break;
  default:
    drink = 'Unknown drink!';
}

console.log(drink); // 'Coke'

function getDrink(type) {
  var drinks = {
    coke: 'Coke',
    pepsi: 'Pepsi',
    default: 'Unknown drink!'
  };

  return `The drink is ${drinks[type] || drinks['default']}`
}

getDrink('pepsi')
