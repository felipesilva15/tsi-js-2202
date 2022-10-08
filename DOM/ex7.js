// Apagando elementos

// Pega nossos elementos da lista e itens
const items = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Removendo o item do documento HTML
items[0].remove();

// Removendo o item do elemento de lista
list.removeChild(items[1]);