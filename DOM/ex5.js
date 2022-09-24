// Cria elemento <li>
let novoItem = document.createElement("li");
novoItem.id = "novo-item";
novoItem.className = "collection-item";
novoItem.setAttribute("title", "Novo item");

// Cria subelemento <a> da tag <li> 
let ancora = document.createElement("a");
ancora.className = "delete-item secondary-content"
ancora.setAttribute("href", "#")

// Cria subelemento <i> da tag <a> 
let icone = document.createElement("i");
icone.className = "fa fa-remove"

// Adiciona o elemento <i> na tag <a>
ancora.appendChild(icone);

// Adiciona o node de texto na tag <li>
novoItem.appendChild(document.createTextNode("Fazer exercícios"));

// Adiciona o elemento <a> na tag <li>
novoItem.appendChild(ancora)

// Captura o elemento <ul>
let lista = document.querySelector("ul.collection");

// Adiciona o elemento <li> na tag <ul>
lista.appendChild(novoItem)