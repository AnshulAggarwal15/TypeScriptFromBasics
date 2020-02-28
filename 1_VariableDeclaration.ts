//let and const are ways to var declaration

/*value of const can't be changed where as value of let can be changed
+ value of const var has to be given at the time of initialisation*/

const x;//error
const x = 10 //cool

const x= 10;
let y= 20;
const x= 30; //errror as value of x cant be changed

//program for more understanding

export {}
let message = 'hello world';
console.log(message);

let x = 10;
let z;
const y = 10;

// const z;
let a = 0;

z = x + y + a;
console.log(z);

a = 2;
z = x + y + a;
console.log(z);
