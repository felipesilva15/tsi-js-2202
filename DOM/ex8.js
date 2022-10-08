// 

const card = document.querySelector(".card");
const title = document.querySelector("h5");

card.addEventListener("mousemove", mostrarEvento);

function mostrarEvento(e){
    title.textContent = `EixoX: ${e.offsetX}, EixoY:${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${(e.offsetY / e.offsetX) / 10})`
}