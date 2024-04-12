/*
function = A section of reusable code.
Declare a function once,use it whenever you want.
call the function to execute that code.

*/
/*
function happyBirthday(j){

    for( let i = j; i >= 5; i ++){

        console.log("Happy birthday to you !");

        if(i == 2){
            console.log("Happy birthday dear you !");  
        }
    }

}
happyBirthday(1);
*/
/*
function happyBirthday(){
    console.log(`Happy birthday to you !`);
    console.log(`Happy birthday to you !`);
    console.log(`Happy birthday dear you !`);
    console.log(`Happy birthday to you !`);
}

happyBirthday();
*/

// we can declare a function with arguments
// in this case, while calling the function,
//  we must pass the arguments
/*
function happyBirthday(username, age){
    console.log(`Happy birthday to you !`);
    console.log(`Happy birthday to you !`);
    console.log(`Happy birthday dear ${username}you !`);
    console.log(`You are ${age} Years old!`);
}
happyBirthday("Brocode",25);
*/
/*
function arithmetic(x,y){
    let result;
    console.log(`addition is :`,result = x+y);
    console.log(`substraction is`,result = x-y);
    console.log(`division is`,result = x/y);
    console.log(`Multiplication is`,result = x*y);
}


arithmetic(5,10);
    */
/*
function isEven(number){
   return number % 2 ===0 ? true : false;
   console.log(number)
}
isEven(5);
*/

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("bro@fake.com"));
console.log(isValidEmail("elon.com"));