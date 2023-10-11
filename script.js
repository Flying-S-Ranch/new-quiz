var body = document.body;
var startBox = document.createElement("div")
var startButton = document.createElement("button")

startBox.textContent = "Hello World"
startButton.textContent = "Start the Quiz"

body.appendChild(startBox)
startBox.appendChild(startButton)

startBox.setAttribute("style", "margin:auto; width: 50%; text-align:center")