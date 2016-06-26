var address = {
    street: "No Street",
    city: "No City",
    state: "No State",

    get getAddress() {
        return this.street + ", " + this.city + ", " + this.state;
    },

    set setAddress(theAddress) {
        var parts = theAddress.toString().split(", ");
        this.street = parts[0] || "";
        this.city = parts[1] || "";
        this.state = parts[2] || "";
    }
}

address.setAddress = "123 main St, Pittsburgh, PA";

document.write("Address : " + address.getAddress + "<br />");
// Address : 123 main St, Pittsburgh, PA

document.write("City : " + address.city + "<br />");
// City : Pittsburgh

// Old way
funtion
Coordinates()
{
    this.latitude = 0;
    this.longitude = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function () {
    return "Lat : " + this.latitude + " Long : " + this.longitude;
});

Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function (coords) {
    var parts = coords.toString().split(", ");
    this.latitude = parts[0] || "";
    this.longitute = parts[1] || "";
});

var testCoords = new Coordinates();

testCoords.setCoords = "40.71, 74.00";

document.write("Coordinates : " + testCoords.getCoords + "<br />");
// Coordinates : Lat : 40.71 Long : 74.00
