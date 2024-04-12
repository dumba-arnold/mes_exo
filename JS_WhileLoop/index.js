//while loop = repeat some code while some condition is true
//1. while 
/*
let username ="aaa";

while(username === ""){
    console.log(`you didn't enter a name `);
    break;
}

console.log(`Hello ${username}`);
*/

//2. do--while: execute something then verify the conditions

/*
let username;

do {
    username = window.prompt('Enter your name');
}while(username ==="" || username === null)

console.log(`Hello ${username}` );
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn){

    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username ==="myUsername" && password ==="myPassword"){
        loggedIn = true;
        console.log("you are logged in");
    }
    else{
        console.log("Invalid credentials ! please try again");
    }
}