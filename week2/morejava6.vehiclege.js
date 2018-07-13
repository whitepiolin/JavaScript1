function vehicle(color, code, age){

    let codeType;
        if (code == 1) { codeType = "car";}          
        else if (code == 2) {codeType = "bike";}
        else { codeType ="Unknown vehicle";}
    
    let ageType;
        if (age <= 1) {ageType = "new";}
        else if (age > 1) {ageType = "used";}
            
    console.log("Our Vehicle is a " + color + " " + ageType + " " + codeType );
}

console.log(vehicle("blue", 1, 1));
console.log(vehicle("red", 3, 3)); 

