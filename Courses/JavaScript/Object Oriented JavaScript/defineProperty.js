function Point() {
    this.xPos = 0;
    this.yPos = 0;
}

// With defineProperty() we can define getter and setter in the same time
Object.defineProperty(Point.prototype, "pointPos", {
    get: function () {
        return "X : " + this.xPos + " Y : " + this.yPos;
    },
    set: function () {
        var parts = thePoint.toString().split(", ");
        this.xPos = parts[0] || "";
        this.yPos = parts[1] || "";
    }
});

var aPoin = new Point();

aPoint.pointPos = "100, 200"

document.write("Point Position " + aPoint.pointPos + "<br />");
// Point Position X : 100 Y : 200

// New way
var Circle = function (radius) {
    this._radius = radius;
}

Circle.prototype = {
    set radius(radius) { this._radius = radius; },
    get radius() { return this._radius; },
    get area() { return Math.PI * (this._radius * this._radius); }
}

var circ = new Circle(10);

circ.radius = 15;

document.write("A circle with radius " + circ.radius + " has an area of " + circ.area.toFixed(2) + "<br />");
// A circle with radius 15 has an area of 706.86
