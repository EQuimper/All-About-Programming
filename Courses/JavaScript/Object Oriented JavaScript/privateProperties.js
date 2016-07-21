// All properties in a object are public so any function can modify this properties

// But we can make it private by create a var inside the constructor

function SecretCode() {
    var secretNum = 78; // This is a private variable

    this.guessNum = function (num) {
        if (num > secretNum) {
            return "Lower";
        } else if (num < secretNum) {
            return "Higher";
        } else {
            return "You guessed it";
        }
    }
}

var secret = new SecretCode();

document.write("Value of secretNum : " + secret.secretNum + "<br />");
// Value of secretNum : undefined

document.write("Is 70 the number : " + secret.guessNum(70) + "<br />");
// Is 70 the number : Higher

document.write("Is 78 the number : " + secret.guessNum(78) + "<br />");
// Is 78 the number : You guessed it

SecretCode.prototype.getSecret = function () {
    return this.secretNum;
}

// That get protected again
// We can't get it by listing Properties either
document.write("The secret number is " + secret.getSecret() + "<br />");
// The secret number is undefined
