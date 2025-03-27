const home_ImgFile = require("./img/home-img.jpg")
const compressedkitty = require("./img/compressedkitty.jpg")

const home_Container = document.createElement("div")
const home_Tagline = document.createElement("div")
const home_Description = document.createElement("div")
const home_Img = document.createElement("img")

function make () {
	home_Container.appendChild(home_Tagline)
	home_Container.appendChild(home_Description)
	home_Container.appendChild(home_Img)
	home_Tagline.innerHTML = "<h2>It's not fancy, but it's not good either</h2>"
	home_Description.textContent = "Feel like spending the least amount of money possible and receiving a just barely acceptable meal in return? Then stop by any of our one locations!"
	home_Img.src = home_ImgFile

	return home_Container
}

module.exports = {make}

