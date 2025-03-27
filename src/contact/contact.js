const contact_ImgFile = require("./img/contact-img.jpg")

const contact_Container = document.createElement("div")
const contact_Tagline = document.createElement("div")
const contact_Description = document.createElement("div")
const contact_Img = document.createElement("img")

function make () {
	contact_Container.appendChild(contact_Tagline)
	contact_Container.appendChild(contact_Description)
	contact_Container.appendChild(contact_Img)
	contact_Tagline.innerHTML = "<h2>We don't want to hear from you</h2>"
	contact_Description.textContent = "Please don't contact us."
	contact_Img.src = contact_ImgFile

	return contact_Container
}

module.exports = {make}
