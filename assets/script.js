var Timer = document.querySelector(".Timer")
var startButton = document.querySelector(".buttonQuiz")
var timeLeft = 60;
var Question = document.querySelector(".Question")
var counter = document.querySelector(".counter")
var realcounter = 0


realScoreRevealed = document.querySelector(".code-block")
//starter text
Question.textContent = "To start the quiz hit the button below"
counter.textContent = "0/5"
// creating buttons
var startButton = document.createElement("button")

var bt1 = document.createElement("button");
var bt2 = document.createElement("button");
var bt3 = document.createElement("button");
var bt4 = document.createElement("button");

var bt12 = document.createElement("button");
var bt22 = document.createElement("button");
var bt32 = document.createElement("button");
var bt42 = document.createElement("button");

var bt13 = document.createElement("button");
var bt23 = document.createElement("button");
var bt33 = document.createElement("button");
var bt43 = document.createElement("button");

var bt14 = document.createElement("button");
var bt24 = document.createElement("button");
var bt34 = document.createElement("button");
var bt44 = document.createElement("button");

var bt15 = document.createElement("button");
var bt25 = document.createElement("button");
var bt35 = document.createElement("button");
var bt45 = document.createElement("button");

var HighScore = localStorage.getItem("count")

var buttons = document.querySelector(".code-block")

startButton.textContent = "Press to Start"

buttons.appendChild(startButton);

startButton.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");

//start button interaction
function Start() {
    Timer.textContent = "The Quiz";
}

function highScore() {
    if (HighScore < realcounter) {
        localStorage.setItem("count", HighScore);
        displayScore.textContent = "You have a new highscore of " + realcounter + "/5"
    } else {
        displayScore.textContent = "your score hasnt beat" + highScore + "/5"
    }


}


function failState() {
    if (timeLeft === 0 || timeLeft < 1){
        buttons.removeChild(bt1);
    buttons.removeChild(bt2);
    buttons.removeChild(bt3);
    buttons.removeChild(bt4);
    Timer.textContent = 'Quiz is finished';

    Question.textContent = "your score is " + realcounter + "/5";
    buttons.appendChild(displayScore);
    clearInterval(timeInterval);
}

}
function failState2() {
    if (timeLeft === 0 || timeLeft < 1){
     buttons.removeChild(bt12);
    buttons.removeChild(bt22);
    buttons.removeChild(bt32);
    buttons.removeChild(bt42);
    Timer.textContent = 'Quiz is finished';

    Question.textContent = "your score is " + realcounter + "/5";
    buttons.appendChild(displayScore);
    clearInterval(timeInterval);
    }

}
function failState3() {
    if (timeLeft === 0 || timeLeft < 1){
    buttons.removeChild(bt13);
    buttons.removeChild(bt23);
    buttons.removeChild(bt33);
    buttons.removeChild(bt43);
    Timer.textContent = 'Quiz is finished';

    Question.textContent = "your score is " + realcounter + "/5";
    buttons.appendChild(displayScore);
    clearInterval(timeInterval);
    }

}

function failState4() {
    if (timeLeft === 0 || timeLeft < 1){
        buttons.removeChild(bt14);
    buttons.removeChild(bt24);
    buttons.removeChild(bt34);
    buttons.removeChild(bt44);
    Timer.textContent = 'Quiz is finished';

    Question.textContent = "your score is " + realcounter + "/5";
    buttons.appendChild(displayScore);
    clearInterval(timeInterval);
    }

}   
function failState5() {
    if (timeLeft === 0 || timeLeft < 1){
        buttons.removeChild(bt15);
    buttons.removeChild(bt25);
    buttons.removeChild(bt35);
    buttons.removeChild(bt45);
    Timer.textContent = 'Quiz is finished';

    Question.textContent = "your score is " + realcounter + "/5";
    buttons.appendChild(displayScore);
    clearInterval(timeInterval);
}

}



//the start button
startButton.addEventListener("click", function () {
    firstQuestion()

    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {

            Timer.textContent = timeLeft + ' seconds remaining';

            timeLeft--;
        } else if (timeLeft === 1) {

            Timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {


            Timer.textContent = 'Quiz is finished';

            Question.textContent = "your score is " + realcounter + "/5";
            buttons.appendChild(displayScore);
            clearInterval(timeInterval);



        }
    }, 1000);
});


Start();

//first question
function firstQuestion() {

    Question.textContent = "What ingredients are in a cake"

    buttons.removeChild(startButton)
    bt1.textContent = "Flour"
    bt2.textContent = "Steak"
    bt3.textContent = "Soda"
    bt4.textContent = "Plastic"

    buttons.appendChild(bt1);
    buttons.appendChild(bt2);
    buttons.appendChild(bt3);
    buttons.appendChild(bt4);

    bt1.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt2.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt3.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt4.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: block;");



};

bt2.addEventListener("click", function () {
    bt2.textContent = "Wrong"
    bt2.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState();

})
bt3.addEventListener("click", function () {
    bt3.textContent = "Wrong"
    bt3.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState();
})
bt4.addEventListener("click", function () {
    bt4.textContent = "Wrong"
    bt4.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState();
})

//first set of questions

bt1.addEventListener("click", function () {

    Question.textContent = "What does a dog not have"

    buttons.removeChild(bt1)
    buttons.removeChild(bt2)
    buttons.removeChild(bt3)
    buttons.removeChild(bt4)

    buttons.appendChild(bt12);
    buttons.appendChild(bt22);
    buttons.appendChild(bt32);
    buttons.appendChild(bt42);

    bt12.textContent = "Hair"
    bt22.textContent = "Scales"
    bt32.textContent = "Tails"
    bt42.textContent = "Teeth"

    bt12.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt22.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt32.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt42.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: block;");

    realcounter = realcounter + 1

    counter.textContent = realcounter + "/5"

})


bt12.addEventListener("click", function () {
    bt12.textContent = "Wrong"
    bt12.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState2();
})
bt32.addEventListener("click", function () {
    bt32.textContent = "Wrong"
    bt32.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState2();
})
bt42.addEventListener("click", function () {
    bt42.textContent = "Wrong"
    bt42.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState2();
})

//second set of questions

bt22.addEventListener("click", function () {

    Question.textContent = "Which animal live in the water"

    buttons.removeChild(bt12)
    buttons.removeChild(bt22)
    buttons.removeChild(bt32)
    buttons.removeChild(bt42)

    buttons.appendChild(bt13);
    buttons.appendChild(bt23);
    buttons.appendChild(bt33);
    buttons.appendChild(bt43);

    bt13.textContent = "Dog"
    bt23.textContent = "Pig"
    bt33.textContent = "Cow"
    bt43.textContent = "Shark"

    bt13.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt23.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt33.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt43.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: block;");

    realcounter = realcounter + 1

    counter.textContent = realcounter + "/5"

})


bt13.addEventListener("click", function () {
    bt13.textContent = "Wrong"
    bt13.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState3()
})
bt33.addEventListener("click", function () {
    bt33.textContent = "Wrong"
    bt33.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState3()
})
bt43.addEventListener("click", function () {
    bt43.textContent = "Wrong"
    bt43.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState3()
})

//third set of questions

bt43.addEventListener("click", function () {

    Question.textContent = "What animal doesent live in the water"

    buttons.removeChild(bt13)
    buttons.removeChild(bt23)
    buttons.removeChild(bt33)
    buttons.removeChild(bt43)

    buttons.appendChild(bt14);
    buttons.appendChild(bt24);
    buttons.appendChild(bt34);
    buttons.appendChild(bt44);

    bt14.textContent = "Shark"
    bt24.textContent = "Dog"
    bt34.textContent = "Whale"
    bt44.textContent = "Shrimp"

    bt14.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt24.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt34.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt44.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: block;");

    realcounter = realcounter + 1

    counter.textContent = realcounter + "/5"

})


bt14.addEventListener("click", function () {
    bt14.textContent = "Wrong"
    bt14.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState4()
})
bt34.addEventListener("click", function () {
    bt34.textContent = "Wrong"
    bt34.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState4()
})
bt44.addEventListener("click", function () {
    bt44.textContent = "Wrong"
    bt44.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState4()
})

//fourth set of questions

bt24.addEventListener("click", function () {

    Question.textContent = "What animal can fly"

    buttons.removeChild(bt14)
    buttons.removeChild(bt24)
    buttons.removeChild(bt34)
    buttons.removeChild(bt44)

    buttons.appendChild(bt15);
    buttons.appendChild(bt25);
    buttons.appendChild(bt35);
    buttons.appendChild(bt45);

    bt15.textContent = "Sparrow"
    bt25.textContent = "Dog"
    bt35.textContent = "Whale"
    bt45.textContent = "Monkey"

    bt15.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt25.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt35.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: inline-block;");
    bt45.setAttribute("style", " width: 100%; font-size: x-large; background-color: #33393f; color: #e866ec; border-radius: 15px; display: block;");

    realcounter = realcounter + 1

    counter.textContent = realcounter + "/5"

})


bt25.addEventListener("click", function () {
    bt25.textContent = "Wrong"
    bt25.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState5()
})
bt35.addEventListener("click", function () {
    bt35.textContent = "Wrong"
    bt35.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState5()
})
bt45.addEventListener("click", function () {
    bt45.textContent = "Wrong"
    bt45.setAttribute("style", " width: 100%; font-size: x-large; background-color: #ff0000; color: #ffffff; border-radius: 15px; display: inline-block;")
    timeLeft = timeLeft - 10;
    failState5()
})

//fifth set of questions

bt15.addEventListener("click", function () {

    Question.textContent = "Test is done"

    buttons.removeChild(bt15)
    buttons.removeChild(bt25)
    buttons.removeChild(bt35)
    buttons.removeChild(bt45)

    timeLeft = 0;

    realcounter = realcounter + 1

    counter.textContent = realcounter + "/5"




})


