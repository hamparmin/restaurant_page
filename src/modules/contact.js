function renderContact(){
    const content=document.createElement("div");
    const para=document.createElement("p");
    para.textContent="PizzArminia operates at several locations nationwide. Find our closest restaurant using the map below!";
    content.appendChild(para);

    const image=document.createElement("img");
    image.src="https://catholicfundamentalism.com/wp-content/uploads/2017/07/102-1024.png";
    image.className="map";
    content.appendChild(image);

    return content
}
export {renderContact};