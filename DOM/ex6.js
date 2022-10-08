// Alterando um elemento com JS

// Cria um elemento h2
const newElement = document.createElement("h2");

// Altera o id do elemento
newElement.id = "task-title";

// Adiciona um elemento de texto
newElement.appendChild(document.createTextNode("Lista de tarefas"));

// Capturamos o elemento antigo
const oldElement = document.getElementById("task-title");   

// Pegamos o elemento pai
const fatherElement =  document.getElementsByClassName("card-action")[0];

fatherElement.replaceChild(newElement, oldElement);