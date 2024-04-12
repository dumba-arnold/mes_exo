/*
index slicing is a process of 
creating a substring from another string.

string.slicee(start,end);
*/

//exo 1

const fullName ="bro code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4,8);
console.log(`first Name :${firstName}`);
console.log(`last name is :${lastName}`);

