function renderAbout(){
    const content=document.createElement("div");
    const para=document.createElement("p");
    para.textContent="Opened in 1569 by Father Armin, a Benedictian Monk, our restaurant serves hungry visitors only the most delicious pizzas with beer and Coca Cola."
    content.appendChild(para);
    return content
}
export {renderAbout};