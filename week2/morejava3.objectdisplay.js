//3
var myCar1 = {
    name: "Opel",
    year: 2003,
    color: "red",
}

var myCar2 = {
    name: "Mercedes",
    year: 2012,
    color: "white",
    model: "E200",
}

function displayObject(car) {
    var x = Object.getOwnPropertyNames(car);   //or Object.keys
    var y = Object.values(car);

    for (var i = 0; i < x.length; i++) {
            console.log( x[i] + " : " + y[i]);
    }
}

console.log(displayObject(myCar1));
console.log(displayObject(myCar2));