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
var secondsLeft = 60
var questionText = document.createElement("h3")
var answerDiv = document.createElement("div")
var ansA = document.createElement("button")
var ansB = document.createElement("button")
var ansC = document.createElement("button")
var ansD = document.createElement("button")
var quizDisplay = "none"

// DATA / STATE
// text of the start box
startText.textContent = "Ready to test your JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

// text of the quiz box
timer.textContent = ":60"
questionText.textContent = "Hello World"
ansA.textContent = "Hello A"
ansB.textContent = "Hello B"
ansC.textContent = "Hello C"
ansD.textContent = "Hello D"

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


// attributes of the start box
startBox.setAttribute("id", "start-box")
startBox.setAttribute("class", "display-visible")
startButton.setAttribute("style", "width: 20%; background-color: teal; margin: auto; padding: 5px; border-radius: 3px")

// attributes of the quiz box
quizBox.setAttribute("class", "display-none")
quizBox.setAttribute("id", "quiz-box")
timeDiv.setAttribute("id", "time-div")
answerDiv.setAttribute("id", "answer-div")
ansA.setAttribute("class", "answer-button")
ansB.setAttribute("class", "answer-button")
ansC.setAttribute("class", "answer-button")
ansD.setAttribute("class", "answer-button")

// FUNCTIONS
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = ":" + secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
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

// INITIALIZATIONS