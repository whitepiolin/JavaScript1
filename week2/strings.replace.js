let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log (myString);
console.log (myString.length);

let newMyString = myString.replace(/,/g, " "); 
console.log(newMyString);

//another way

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log (myString);
console.log (myString.length);

let newMyString = myString.(new RegExp(',', 'g'), ' ');
console.log(newMyString);