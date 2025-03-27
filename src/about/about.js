const about_ImgFile = require("./img/help-img.jpg")

const about_Container = document.createElement("div")
const about_Tagline = document.createElement("div")
const about_Description = document.createElement("div")
const about_Img = document.createElement("img")

function make () {
	about_Container.appendChild(about_Tagline)
	about_Container.appendChild(about_Description)
	about_Container.appendChild(about_Img)
	about_Tagline.innerHTML = "<h2>Home cooked meals that you can eat</h2>"
	about_Description.textContent = "Yes, we live here. This is our home. We sleep on the kitchen floors because Mike won't let us in the lobby. Help!"
	about_Img.src = about_ImgFile

	return about_Container
}

module.exports = {make}

