function renderContact(){
    const content=document.createElement("div");
    const para=document.createElement("p");
    para.textContent="Find us using the map below";
    content.appendChild(para);

    const image=document.createElement("img");
    image.src="https://i.ya-webdesign.com/images/maps-vector-treasure-hunt-1.png";
    content.appendChild(image);

    return content
}
export {renderContact};