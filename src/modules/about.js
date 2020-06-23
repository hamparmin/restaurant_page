function renderAbout(){
    const content=document.createElement("div");
    const para=document.createElement("p");
    para.textContent="Opened in 1569 by Father Armin, a Benedictian Monk, our restaurant serves hungry visitors only the most delicious pizzas with beer and Coca Cola. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    content.appendChild(para);
    return content
}
export {renderAbout};