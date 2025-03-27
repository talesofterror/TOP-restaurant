const menu_ImgFile = require("./img/menu-img.jpg")

const menu_Container = document.createElement("div")
const menu_Tagline = document.createElement("div")
const menu_Description = document.createElement("div")
const menu_Img = document.createElement("img")

function make () {
	menu_Container.appendChild(menu_Tagline)
	menu_Container.appendChild(menu_Description)
	menu_Container.appendChild(menu_Img)
	menu_Tagline.innerHTML = "<h2>cheeseburger</h2>"
	menu_Description.textContent = "chjeesburger"
	menu_Img.src = menu_ImgFile

	return menu_Container
}

module.exports = {make}

