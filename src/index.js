//set up basic structure
const content=document.querySelector("#content");

// header
const header=document.createElement("h1");
header.textContent="PizzArminia";
content.appendChild(header);

// pizza logo
const logo = document.createElement("img");
logo.src="https://clipartart.com/images/clipart-images-of-pizza-3.png";
content.appendChild(logo);