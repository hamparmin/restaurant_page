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

// pizza logo
const logo = document.createElement("img");
logo.src="https://clipartart.com/images/clipart-images-of-pizza-3.png";
logo.className="logo";
content.appendChild(logo);

//h2
const header2=document.createElement("h2");
header2.textContent="Have a taste of the world's most delicious pizzas";
header2.className="subtitle";
content.appendChild(header2);

//create tabs
const tabsy=document.createElement("div");
tabsy.className="tabsy";
content.appendChild(tabsy);

//func to set up tabs within
function createTab(id,name,renderMe){
    //radio button
    const radio=document.createElement("input");
    radio.type="radio";
    radio.id=id;
    radio.name="tab";

    //link radio button
    const tab=document.createElement("label");
    tab.className="tabButton";
    tab.for=id;
    tab.textContent=name;
    tab.id=id;
    const inside=renderMe();
    tab.appendChild=inside;

    //append to DOM
    tabsy.appendChild(radio);
    tabsy.appendChild(tab);
}

createTab("tab1", "About",renderAbout);
createTab("tab2", "Menu",renderMenu);
createTab("tab3", "Contact Us",renderContact);

const button1=document.querySelector("#tab1");
button1.checked=true;

const test=renderContact();
content.append(test);
