function Vehicle(name) {
    this.name = "Vehicle";
}

Vehicle.prototype = {
    drive: function () {
        return this.name + " drives forward";
    },
    stop: function () {
        return this.name + " stop";
    }
}

function Truck(name) {
    this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function () {
    var driveMsg = Vehicle.prototype.drive.apply(this);

    return driveMsg += " through a field";
}

var jeep = new Truck("Jeep");

document.write(jeep.dive() + "<br />");
// Jeep drives forward through a field
document.write(jeep.stop() + "<br />");
// Jeep stop
