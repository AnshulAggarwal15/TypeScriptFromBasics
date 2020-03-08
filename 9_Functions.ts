function add(num1,num2){
  return num1+num2;
}
add(5,10);
//wont work in TS
//in TS we have to specify types also
function add(num1:number,num2: number){
  return num1+num2;
}
add(5,10);
