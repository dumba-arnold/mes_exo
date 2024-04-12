/* 

Array = a variable like a structure
that can hold more than one value.

*/

let fruits = ["apple","orange","banana","coconut"];

//console.log(fruits);
//console.log(fruits[0]);

//replacing an array member :
//fruits[0] = "coconut";
//console.log(fruits);

//array functions :
//push()to add or push an element to the end;
//fruits.push("coconut");
//console.log(fruits);

//pop() to remove the last element from the array
//fruits.pop();
//console.log(fruits);

//unshift() will add an element at the beginning of an array.

//fruits.unshift("pinnaple");
//console.log(fruits);

//length() returns the length of the array.

//indexOf() returns the index of an element in the array.

//let index = fruits.indexOf("apple");
//console.log(index);

/*
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/
fruits.sort().reverse()
for(let fruit of fruits){
    console.log(fruit);
}



