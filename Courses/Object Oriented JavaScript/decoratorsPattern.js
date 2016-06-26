function Pizza(price) {
    this.price = price || 10;
}

Pizza.prototype.getPrice = function () {
    return this.price;
}

function ExtraCheeze(pizza) {
    var prevPrice = pizza.price;

    pizza.price = prevPrice + 1;
}

var myPizza = new Pizza(10);

ExtraCheeze(myPizza);

document.write("Cost of Pizza : $" + myPizza.price + "<br />");
// Cost of Pizza : $11
