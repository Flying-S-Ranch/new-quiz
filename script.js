// DEPENDENCIES
var body = document.body;
var startBox = document.createElement("div")
var startText = document.createElement("h2")
var startButton = document.createElement("button")

var display = "visible"

// DATA / STATE
startText.textContent = "Ready to test your JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

body.appendChild(startBox)
startBox.appendChild(startText)
startBox.appendChild(startButton)

startBox.setAttribute("style", "margin:auto; width: 50%; text-align:center; padding-top: 15px")
startButton.setAttribute("style", "width: 20%; background-color: teal; margin: auto; padding: 5px; border-radius: 3px")

// FUNCTIONS


// USER INTERACTIONS
startBox.addEventListener("click", function() {
    if (display === "visible") {
        display = "none";
        startBox.setAttribute("style", "display:none")
    }
})

// INITIALIZATIONS