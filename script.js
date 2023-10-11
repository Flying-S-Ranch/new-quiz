var body = document.body;
var h1El = document.createElement("h1")

h1El.textContent = "Hello World"

body.appendChild(h1El)

h1El.setAttribute("style", "margin:auto; width: 50%; text-align:center")