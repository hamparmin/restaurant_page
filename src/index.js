//import modules
import {renderAbout} from './modules/about'
import {renderContact} from './modules/contact'
import {renderMenu} from './modules/menu'

//set up basic structure
const content=document.querySelector("#content");

//h1
const header=document.createElement("h1");
header.textContent="PizzArminia";
header.className="title";
content.appendChild(header);

//h2
const header2=document.createElement("h2");
header2.textContent="Have a taste of the world's most delicious pizzas";
header2.className="subtitle";
content.appendChild(header2);

// pizza logo
const logo = document.createElement("img");
logo.src="https://clipartart.com/images/clipart-images-of-pizza-3.png";
logo.className="logo";
content.appendChild(logo);

//fill in tabs
const about=document.querySelector(".about");
about.appendChild(renderAbout());

//const menu=document.querySelector(".menu");
//menu.appendChild(renderMenu());

const contact=document.querySelector(".contact");
contact.appendChild(renderContact());

