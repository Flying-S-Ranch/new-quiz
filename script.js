var body = document.body;
var startBox = document.createElement("div")
var startButton = document.createElement("button")

startBox.textContent = "Ready to test your JavaScript knowledge?"
startButton.textContent = "Start the Quiz"

body.appendChild(startBox)
startBox.appendChild(startButton)

startBox.setAttribute("style", "margin:auto; width: 50%; text-align:center; padding-top: 15px")
startButton.setAttribute("style", "width: 20%; background-color: teal; margin: auto")