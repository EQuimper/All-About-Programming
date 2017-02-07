class User {
  constructor(email) {
    this.email = email;
    let _password;
    this.setPassword = function(pass) {
      _password = pass;
      return this;
    };

    this.authenticated = function(pass) {
      if (pass === _password) {
        console.log('success');
      } else {
        console.log('error');
      }
      return this;
    };
  }

  getEmail() {
    return this.email;
  }
}

const newUser = new User('gmail@').setPassword('pass').authenticated('pass');

