function add(num1,num2){
  return num1+num2;
}
add(5,10);


/*OPTIONAL PARAMETER

? after a parameter makes it optional
condition optional parameters comes after required parameters
*/

function add(num1:number,num2?: number){
 if(num2)
 return num1+num2;
 else
 return num1;
}
add(5);
