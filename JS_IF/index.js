// if statements mean if the condition is true, execute something
// if not, do something else.

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);

    if (age >= 100) {
        resultElement.textContent = `You are too old to enter this site`;
    } else if (age == 0) {
        resultElement.textContent = `You can't enter this site. You are just born`;
    } else if (age >= 18) {
        resultElement.textContent = `You are old enough to enter this site`;
    } else {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}
