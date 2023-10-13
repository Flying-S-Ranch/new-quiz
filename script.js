// DEPENDENCIES
var body = document.body;
// this is the box for the start of the quiz
var startBox = document.createElement("div")
var startText = document.createElement("h2")
var startButton = document.createElement("button")
var startDisplay = "visible"

// this is the box that displays the questions
var quizBox = document.createElement("div")
var timeDiv = document.createElement("div")
var timer = document.createElement("h4")
var secondsLeft = 5
var questionText = document.createElement("h3")
var answerDiv = document.createElement("div")
var ansA = document.createElement("button")
var ansB = document.createElement("button")
var ansC = document.createElement("button")
var ansD = document.createElement("button")
var quizDisplay = "none"

// this is the box that says 'game over'
var endBox = document.createElement("div")
var gameOver = document.createElement("h3")
var promptBox = document.createElement("div")
var prompt = document.createElement("h4")
var input = document.createElement("input")
var endDisplay = "none"

// DATA / STATE
// text of the start box
startText.textContent = "Ready to test your JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

// text of the quiz box
timer.textContent = ":5"
questionText.textContent = "Hello World"
ansA.textContent = "Hello A"
ansB.textContent = "Hello B"
ansC.textContent = "Hello C"
ansD.textContent = "Hello D"

// text of the end box
gameOver.textContent = "GAME OVER"
prompt.textContent = "Please enter your initials:"

// children of the start box
body.appendChild(startBox)
startBox.appendChild(startText)
startBox.appendChild(startButton)

// children of the quiz box
body.appendChild(quizBox)
quizBox.appendChild(timeDiv)
timeDiv.appendChild(timer)
quizBox.appendChild(questionText)
quizBox.appendChild(answerDiv)
answerDiv.appendChild(ansA)
answerDiv.appendChild(ansB)
answerDiv.appendChild(ansC)
answerDiv.appendChild(ansD)

// children of the end box
body.appendChild(endBox)
endBox.appendChild(gameOver)
endBox.appendChild(promptBox)
promptBox.appendChild(prompt)
promptBox.appendChild(input)

// attributes of the start box
startBox.setAttribute("id", "start-box")
startBox.setAttribute("class", "display-visible")
startButton.setAttribute("id", "start-button")

// attributes of the quiz box
quizBox.setAttribute("class", "display-none")
quizBox.setAttribute("id", "quiz-box")
timeDiv.setAttribute("id", "time-div")
answerDiv.setAttribute("id", "answer-div")
ansA.setAttribute("class", "answer-button")
ansB.setAttribute("class", "answer-button")
ansC.setAttribute("class", "answer-button")
ansD.setAttribute("class", "answer-button")

// attributes of the end box
endBox.setAttribute("class", "display-none")
endBox.setAttribute("id", "end-box")
promptBox.setAttribute("id", "prompt-box")
prompt.setAttribute("id", "prompt")
input.setAttribute("type", "text")
input.setAttribute("id", "initial-input")

// FUNCTIONS
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = ":" + secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizBox.setAttribute("class", "display-none")
            endBox.setAttribute("class", "display-visible")
        }
    }, 1000);
}

// USER INTERACTIONS
startBox.addEventListener("click", function() {
    if (startDisplay === "visible") {
        startDisplay = "none";
        startBox.setAttribute("class","display-none")
        quizDisplay = "visible"
        quizBox.setAttribute("class", "display-visible")
        setTime()
    }
})

// I followed the example of a W3 Schools article to trigger an event with the enter key, please see README for the link
input.addEventListener("keypress", function(event) {
    var initials = input.value
    if (event.key === "Enter") {
        event.preventDefault();
        console.log(initials)
    }
})

// INITIALIZATIONS