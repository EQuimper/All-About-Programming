// first uppercase
// this refer to the object
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robinson', 25, 'female');

// PROTOTYPE

User.prototype.emailDomain = '@facebook.com';

user1.emailDomain // '@facebook.com'

User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}

user1.getEmailAddress(); // 'JohnSmith@facebook.com'
