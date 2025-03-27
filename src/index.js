require("./css/style.css")

const pages = {
	home: require("./home/home.js"),
	about: require("./about/about.js"),
	menu: require("./menu/menu.js"),
	contact: require("./contact/contact.js"),
}

const contentElement = document.getElementById("content")

contentElement.appendChild(pages.home.make())

switcher = function (target) {
	contentElement.innerHTML = ""
	contentElement.appendChild(pages[target].make())
}

module.exports = switcher
