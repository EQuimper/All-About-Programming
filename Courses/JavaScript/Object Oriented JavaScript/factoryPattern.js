function Sword(desc) {
    this.weaponType = "Sword";
    this.metal = desc.metal || "Steel";
    this.style = desc.style || "Longsword";
    this.hasMagic = desc.hasMagic || false;
}

function Bow(desc) {
    this.weaponType = "Bow";
    this.material = desc.metal || "Wood";
    this.style = desc.style || "Longbow";
    this.hasMagic = desc.hasMagic || false;
}

function WeaponFactory() {};

WeaponFactory.prototype.makeWeapon = function (desc) {
    var weaponClass = null;

    if (desc.weaponType === "Sword") {
        weaponClass = Sword;
    } else if (desc.weaponType === "Bow") {
        weaponClass = Bow;
    } else {
        return false;
    }

    return new weaponClass(desc);
}

var myWeaponFact = new WeaponFactory();

var bladeFist = myWeaponFact.makeWeapon({
    weaponType: "Sword",
    metal: "Dark Iron",
    style: "Scythe",
    hasMagic: true
});

document.write(bladeFist.weaponType + " of type " + bladeFist.style + " crafted from " + bladeFist.metal + "<br />");
// Sword of type Scythe crafted from Dark Iron
