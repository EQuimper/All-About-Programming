var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};

person.greet();

person['firstname'];
