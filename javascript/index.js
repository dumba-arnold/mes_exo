//console.log(`Hello`);
//console.log(`I like pizza`);

//window.alert(`this is an alert !`);

//window.alert(`I like pizza !`);


//this is a comment line in java

/*
This 
is 
a 
comment
*/

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza`;

/* 
document.getElementById allows you
to put text in an html page dynamically from javascript.

it has to be associated with textContent alongwith the variable declared from html.
*/
/*

console.log() is used to display a message on a console

window.alert() is used to display an alert message on a web page
*/

//2. Variables
//=====================================================

//Numeric
/*
let x;
let y;
x= 10;
y= 15;

let result = x+y;
console.log(result);
*/



/*
It is possible to manipulate console.log() function so to print
variable with a message.
*/

/*
let age = 20;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age); // typeof is used to display the type of a given variable

console.log(`Your age is ${age} Years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
*/

/*
A part from numeric datatypes we can also 
manipulate string datatype as seen below
*/
//String

/*
let firstName = "Bro";
let favoriteFood = "Pizza";
let email ="bro@gmail.com";

console.log(typeof firstName);
console.log(`your name is : ${firstName}`);
console.log(`your favorite food is : ${favoriteFood}`);
console.log(`your email is :${email}`);
*/

//Boolean
/*
We can also treat the bolean variables true or false.
*/


/*
let fullName = "Bro code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is :${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Your student status :${isStudent}`;
*/

/*
3. Arithmetic operators
=====================================
+,-,/,*,%,++,--
*/
/*
let students = 30;
//students = students +1; // addition
//students = students -1; // substraction
//students = students * 2; // mutltiplication
//students = students /2; // division
//students = students % 2; // modulus operator to get the reminder of a division
//students = students ** 2; // ** represents the exponent operator


// there is another way of writing the above operations :

//students += 1;
//students -= 2;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

students ++; // incremental operation
students --; // decremental operation
console.log(students);
/*
operator precedence
parenthesis ()
exponents 
multiplication and division
addition and substraction
*/

/*
let result = 1 + 2 *3 + 4 **2; 
console.log(result);
*/





/*
4. Getting user inputs
===========================================
*/
/*
A. Easy way : window prompt
B. professional way : html textbox
*/



/*

//A. Window prompt :
let userName;

userName = window.prompt(`Enter your user Name please :`);
window.alert(`Your user name is : ${userName}`);
*/

/*
//B. Professional way :
* create a simple form in html
*/

/*
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent =`Hello ${username}`;
}
*/

/*
5. Type conversion :
==============================================
Type conversion is a process of changing one data type to another type
*/

//let age = window.prompt("How old are you ?")
/*
age +=1;
window.alert(age);
*/


/* the above operation is giving us 501. This means that
whenever we get user input from console or web page, it is always in 
string type.
To conver it to desired type we have to call a specific function to do type casting$
as shown below
*/

/*
let age = window.prompt("How old are you ?")
age = Number(age);
age +=1;

console.log(age, typeof age);
window.alert(age, typeof age);
*/


/*

6. Constants
================================
A variable that can not be changed.
*/

/*
const PI = 3.14
let radius;
let circumference;

radius = window.prompt(`enter the radius please :`);
radius = Number(radius);

circumference = 2 * PI * radius;
console.log(circumference)
*/

/*
Const via html page :
*/

const PI = 3.14;
let radius;
let circumference;
document.getElementById("mySubmit").onclick = function(){

    radius = document.getElementById("myText").value; 
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent= circumference + "cm";
}