require("./css/style.css")
const module_Home = require("./home/home.js")

const contentElement = document.getElementById("content")

contentElement.appendChild(module_Home.makeHome())
