//It is possible in TypeSscript to use an object as Data Type

example-

function fullname(person:{firstName: string,lastName:string}){
	return console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
firstName : 'Bruce',
lastName :'Wayne'
};

fullname(p);

//if there are more parameters than interface is much benificial to use

interface Person{
firstName: string,
lastName:string
//lastName?:string will make it optional parameter

}
function fullname(person:Person){
	return console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
firstName : 'Bruce',
lastName :'Wayne'
};

fullname(p);	
