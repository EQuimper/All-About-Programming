// Just one object
function Hero(name) {
    // For checking if the object have already been created
    if (typeof Hero.instance === 'object') {
        return Hero.instance;
    }

    this.name = name;
    Hero.instance = this;
    return this;
}

var derekHero = Hero("Derek");
document.write("Our hero is " + derekHero.name + "<br />");
// Our hero is Derek
var paulHero = Hero("Paul");
document.write("Our hero is " + paulHero.name + "<br />");
// Our hero is Derek // Cause we can only have one hero
