let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar);

//it gives "string" because we take the second as typeof "typeof 42".
/*
> let bar = 42;
undefined
> bar
42
> typeof typeof bar;
'string'
> bar
42
> typeof bar
'number'
> typeof "number"
'string'
>
*/
