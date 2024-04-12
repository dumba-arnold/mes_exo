const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let mark;

mySubmit.onclick = function(){

    mark = myText.value;
    mark = Number(mark);

    if(mark < 26) {
        myResult.textContent = `unfortunately you have not passed the exam`;

    }
    else if(mark == 26){
        myResult.textContent = `Congratulations, you have passed the exam`;

    }
    else if(mark >=30 || mark == 40) {
        myResult.textContent =` Congrats ! you have a ticket restaurant with Guillaume`;

    }
}


