var speak = function (what) {
    console.log(what);
    console.log(this);
}

speak("move"); // this is global here

/******************/

var speak = function (what) {
    console.log(this.love);
}

var saySomething = {
    normal: "meow",
    love: "purr"
}

speak.call(saySomething); // purr

/******************/

var speak = function (what) {
    console.log(what);
    console.log(this.love);
}

var saySomething = {
    normal: "meow",
    love: "purr"
}

speak.call(saySomething, saySomething.normal); // meow purr

speak.apply(saySomething, ['meouff']); // meouff
