// DEPENDENCIES
var body = document.body;
var startBox = document.createElement("div")
var startText = document.createElement("h2")
var startButton = document.createElement("button")

var startDisplay = "visible"

// DATA / STATE
startText.textContent = "Ready to test your JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

body.appendChild(startBox)
startBox.appendChild(startText)
startBox.appendChild(startButton)

startBox.setAttribute("id", "start-box")
startBox.setAttribute("class", "display-visible")
startButton.setAttribute("style", "width: 20%; background-color: teal; margin: auto; padding: 5px; border-radius: 3px")

// FUNCTIONS


// USER INTERACTIONS
startBox.addEventListener("click", function() {
    if (startDisplay === "visible") {
        startDisplay = "none";
        startBox.setAttribute("class","display-none")
    }
})

// INITIALIZATIONS