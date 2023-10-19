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
var score = document.createElement("h4")
var scoreValue
var secondsLeft
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

// this is the box where initials and scores are displayed
var scoreBox = document.createElement("div")
var scoreTitle = document.createElement("h3")
var scoreList = document.createElement("ol")
var scoreOne = document.createElement("li")
var againButton = document.createElement("button")

// DATA / STATE
// text of the start box
startText.textContent = "Ready to test your JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

// text of the quiz box
// timer.textContent = "Time :5"
// score.textContent = "Score: " + scoreValue 
questionText.textContent = "Hello World"
ansA.textContent = "Hello A"
ansB.textContent = "Hello B"
ansC.textContent = "Hello C"
ansD.textContent = "Hello D"

// object containing quiz questions
var quiz = [
    {
        "question": "this is the content of question 1",
        a: "Answer A",
        b: "Answer B",
        c: "Answer C",
        d: "Answer D",
        correct: "c"
    },
    {
        "question": "this is the content of question 1",
        a: "Answer A",
        b: "Answer B",
        c: "Answer C",
        d: "Answer D",
        correct: "c"
    },
    {
        "question": "this is the content of question 1",
        a: "Answer A",
        b: "Answer B",
        c: "Answer C",
        d: "Answer D",
        correct: "c"
    }
    
]

// text of the end box
gameOver.textContent = "GAME OVER"
prompt.textContent = "Please enter your initials:"

// text of the score box 
scoreTitle.textContent = "Game Scores"
againButton.textContent = "Play Again"

// children of the start box
body.appendChild(startBox)
startBox.appendChild(startText)
startBox.appendChild(startButton)

// children of the quiz box
body.appendChild(quizBox)
quizBox.appendChild(timeDiv)
timeDiv.appendChild(timer)
timeDiv.appendChild(score)
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

// children of the score box
body.appendChild(scoreBox)
scoreBox.appendChild(scoreTitle)
scoreBox.appendChild(scoreList)
scoreBox.appendChild(scoreOne)
scoreBox.appendChild(againButton)

// attributes of the start box
startBox.setAttribute("id", "start-box")
startBox.setAttribute("class", "display-visible")
startButton.setAttribute("id", "start-button")

// attributes of the quiz box
quizBox.setAttribute("class", "display-none")
quizBox.setAttribute("id", "quiz-box")
timeDiv.setAttribute("id", "time-div")
timer.setAttribute("class", "timer-div-elements")
score.setAttribute("class", "timer-div-elements")

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

// attributes of the score box 
scoreBox.setAttribute("class", "display-none")
scoreBox.setAttribute("id", "score-box")
againButton.setAttribute("id", "again-button")

// FUNCTIONS
function setTime() {
    secondsLeft = 30
    scoreValue = 0
    timer.textContent = "Time :" + secondsLeft
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time :" + secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizBox.setAttribute("class", "display-none")
            endBox.setAttribute("class", "display-visible")
        }
    }, 1000);
}

function displayQuiz() {
    score.textContent = "Score: " + scoreValue
}

function placeScores() {
    // get all the scores from local storage

    // put the scores into an array

    // arrange scores from high to low

    // display scores in ordered list
}

// USER INTERACTIONS
startButton.addEventListener("click", function() {
        startBox.setAttribute("class","display-none")
        quizBox.setAttribute("class", "display-visible")
        setTime()
        displayQuiz()
    
})

ansC.addEventListener("click", function() {
    for (i = 0; i < quiz.length; i++) {
        if (quiz[i].correct === "c") {
            // if answer is correct, add to the score
            console.log("correct")
            scoreValue = scoreValue + 10
            score.textContent = "Score: " + scoreValue
        }  else {
            // if answer is incorrect, take away time
            console.log("incorrect")
            secondsLeft = secondsLeft - 10
        }
        // change to the next question
        i ++
    }
})

ansA.addEventListener("click", function() {
    for (i = 0; i < quiz.length; i++) {
        if (quiz[i].correct === "a") {
            // if answer is correct, add to the score
            console.log("correct")
            scoreValue = scoreValue + 10
            score.textContent = "Score: " + scoreValue
        }  else {
            // if answer is incorrect, take away time
            console.log("incorrect")
            secondsLeft = secondsLeft - 10
        }
        // change to the next question
        i ++
    }
})

againButton.addEventListener("click", function() {
    scoreBox.setAttribute("class", "display-none")
    startBox.setAttribute("class", "display-visible")
})

// I followed the example of a W3 Schools article to trigger an event with the enter key, please see README for the link
input.addEventListener("keypress", function(event) {
    var initials = input.value
    if (event.key === "Enter") {
        event.preventDefault();
        var saveInitials = initials.toUpperCase()
        localStorage.setItem("player", saveInitials)
        input.value = ""
        endBox.setAttribute("class", "display-none")
        scoreBox.setAttribute("class", "display-visible")
        placeScores()
    }
})

// INITIALIZATIONS