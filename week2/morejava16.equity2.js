//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

//changing o2
console.log(o3);
o2 = { foo: "bar2" };
console.log(o3);
//doesnt change

o1 = { foo: "bar3" };
console.log(o3);
//doesnt change

//replace o2 and o3

o1 = { foo: 'bar' };
o2 = { foo: 'bar' };
o2 = o3;

//changing o2
console.log(o3);
o2 = { foo: "bar2" };
console.log(o3);
//doesnt change

o1 = { foo: "bar3" };
console.log(o3);
//doesnt change

//how change
o1 = o3 ;

console.log(o3);



