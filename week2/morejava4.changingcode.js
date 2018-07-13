function vehicletype (color, code) {
    if ( code==1 ) {
        console.log("a " + color + " motorbike");
    }
    else if (code==2) {
        console.log("a " + color + " car");
    }
    else console.log("invalid type of vehicle");
    
}

console.log(vehicletype("blue", 1));
console.log(vehicletype("red", 2));
console.log(vehicletype("blue", 0));
