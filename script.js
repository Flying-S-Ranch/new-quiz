// DEPENDENCIES
var body = document.body
var startBox = document.createElement("div")
var startButton = document.createElement("button")
// start-button


// DATA / STATE
// start-box
startBox.textContent = "Ready to test you JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

body.appendChild(startBox)
startBox.appendChild(startButton)

startBox.setAttribute("style", "margin: 20px black")
// quiz-box

// score-box


// FUNCTIONS


// USER INTERACTIONS
// user clicks the start button
    // start box stops displaying
    // quiz box appears
    // timer starts
    // first question displayed

// user chooses an answer
    // if the answer is incorrect, ten seconds are deducted from the clock
    // the quiz moves on to the next question

// user enters their initials
    // initials and score are saved to local storage
    // initials and score are displayed with other scores


// INITIALIZATIONS
