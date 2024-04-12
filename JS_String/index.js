/*
String methods ae used
to manipulate and work with text.
*/

let userName = "BroCode";

//console.log(userName.charAt(0));// it returns the charcter at given position.

 //console.log(userName.indexOf("o"));//it returns the index of a given character.
 //console.log(userName.lastIndexOf("o"));

//console.log(userName.length); it returns the length of a given string

//userName = userName.trim();// trim() removes spaces from the right
//console.log(userName);
// toupperCase(),it converts all the string to uppercase()
//userName = userName.toLowerCase();

//console.log(userName);// the contrary of toupperCse();
//startsWith()
/*
let result = userName.startsWith(" ");
 if(result){

    console.log("your username can't begin with ' ' ");
 }
 else{
    console.log(userName);
 }
*/
// endsWith() is the oposite of startsWith()

/*
let result = userName.endsWith(" ");
 if(result){

    console.log("your username can't end with ' ' ");
 }
 else{
    console.log(userName);
 }
 */
// includes() prevents a string from including something. e.g :

/*
let result = userName.includes(" ");
 if(result){

    console.log("your username can't include' ' ");
 }
 else{
    console.log(userName);
 }
 */

//replaceAll() for replacing specified charcaters with the given character
/*
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);
*/
//padStart(15,0); it means make the string to 15 characters and replace the empty places with zeros
//padEnd() is the opposite of padStart();
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.padStart(15,"0");
console.log(phoneNumber);