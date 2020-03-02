//A variable can take any type
//exmple-

let a = 1;
console.log(a);

let b : any  = 5;

console.log(b);

b = 'rgr';

console.log(b);


//IISUE with 'ANY'

//even a function named as b will be valid and compiler wont show any error, making code ineffiecient
//example- 

b();
console.log(b.name);
