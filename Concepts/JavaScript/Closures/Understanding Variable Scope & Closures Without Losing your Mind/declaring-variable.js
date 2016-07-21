var myGlobal = "Global variable 1";

function myFunction() {
    var myLocal1 = "Local variable 1";
    console.log(myGlobal);
    console.log(myLocal1);
    window.myGlobal2 = "Global variable 2"; // That create a global variable
}

myFunction();
