let e;

e = document.getElementsByClassName("collection-item");

items = Array.from(e);

items.forEach(item => {
    item.style.color = "red";
    // item.innerText = `Tarefa: ${item.innerText}`

    console.log(item.innerText);
}); 

e = document.querySelectorAll("li:nth-child(odd)");

e.forEach(item => {
    item.style.background = "black";

    console.log(item.innerText);
}); 

e = document.querySelector("ul.collection");

console.log(e.children[2].children[0])