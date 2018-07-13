//7
var listOfVehicles = ["bike", "caravan", "motorbike", "car", "train"];
console.log(listOfVehicles);
//8
console.log(listOfVehicles[2]);
//9
function vehicle(color, age, code){

    let codeType;
        if (code == 1) { codeType = listOfVehicles[0];}          
        else if (code == 2) {codeType = listOfVehicles[1];}
        else if (code == 3) {codeType = listOfVehicles[2];}
        else if (code == 4) {codeType = listOfVehicles[3];}
        else if (code == 5) {codeType = listOfVehicles[4];}
        else { codeType ="Unknown vehicle";}
    
    let ageType;
        if (age == 3) {ageType = "new";}
        else {ageType = "used";}
            
    console.log("Our Vehicle is a " + color + " " + ageType + " " + codeType );
}
console.log(vehicle("green", 3, 1)); // a green new bike
//10
console.log("Amazing My Garage, We service " + listOfVehicles[0] + "s, " + listOfVehicles[1] + "s, "+ listOfVehicles[2] + "s, "+ listOfVehicles[3] + "s and "+ listOfVehicles[4] + "s.");
//10 Alternative
let name = listOfVehicles[0];

for (let i = 1; i < listOfVehicles.length; i++) {

        if (i==listOfVehicles.length-1) {
            name = `${name}s and ${listOfVehicles[i]}s`;}
    
        else{name = `${name}s, ${listOfVehicles[i]}`;}
}

console.log(`Amazing My Garage, We service ${name}.`);
//11
listOfVehicles.push("truck");
console.log(listOfVehicles);

name = listOfVehicles[0];
for (let i = 1; i < listOfVehicles.length; i++) {

        if (i==listOfVehicles.length-1) {
            name = `${name}s and ${listOfVehicles[i]}s`;}
    
        else{name = `${name}s, ${listOfVehicles[i]}`;}
}

console.log(`Amazing My Garage, We service ${name}.`);
