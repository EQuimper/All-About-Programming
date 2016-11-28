(function (lastname) { // immediately invoke function
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe'));

var firstname = 'Jane';
console.log(firstname);

/*
* John
* Doe
* Jane
*/
