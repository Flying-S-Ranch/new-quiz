var body = document.body;
var divEl = document.createElement("div")

divEl.textContent = "Hello World"

body.appendChild(divEl)

divEl.setAttribute("style", "margin:auto; width: 50%; text-align:center")