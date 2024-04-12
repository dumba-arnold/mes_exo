//Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor( Math.random() *(maxNum - minNum + 1));

let attempts = 0;

let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("The number must be between 1 and 100");
    }

    else{

        attempts ++;
        if(guess < answer){

            window.alert("TOO LOW ! TRY AGAIN");
        }
        else if(guess > answer){
            window.alert("TOO HIGH ! TRY AGAIN !");
        }
        else{
            window.alert(`CORRECT ! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
    //console.log(typeof guess, guess);
    

}
//console.log(answer);