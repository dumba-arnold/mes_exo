/*
Ternary operator =
a shortcut to if{} and {}blocks.
it helps to assign a variable based on a condition.
condition ? codeIfTrue : codeIfFalse;

The advantage of ternary operator is that it's time saving
it avoids code repeatation.
*/

/*
let age = 12;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);
*/

/*
let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);
*/
//let isStudent = false;
//let message = isStudent ? "You are a student" : "You are not a student";
//console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

