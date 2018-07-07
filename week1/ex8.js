var x = 111;
var w = "aaa";
var y = ["bbb", 222];
var z = true;

console.log(x);
console.log(w);
console.log(y);
console.log(z);

console.log("x is a number");
console.log("w is a string");
console.log("y is an array");
console.log("z is a boolean");

console.log(typeof(x));
console.log(typeof(w));
console.log(typeof(y));
console.log(typeof(z));

if ( (typeof(x)) === (typeof(y)) ) {
    console.log("sameType");
}
else {
    console.log("differentType");

}

