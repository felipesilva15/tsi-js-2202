const entradaTarefa = document.querySelector("#tarefa");
const btnAddTarefa = document.querySelector(".btn");
const listaDeTarefas = document.querySelector(".collection");
const filtroDeTarefa = document.querySelector("#filtro");
const btnLimpaTudo = document.querySelector(".limpar-tarefas");

function carregaMonitoresDeEventos(){
    // Evento para adicionar a tarefa
    btnAddTarefa.addEventListener("click", adicionarTarefa);

    // Evento para apagar uma única tarefa
    listaDeTarefas.addEventListener("click", apagarTarefa);

    // Evento que apaga todas as tarefas
    btnLimpaTudo.addEventListener("click", limparTarefas);

    // Eventro de digitação para que seja afetado o filtro de tarefas
    filtroDeTarefa.addEventListener("keyup", filtrar);
}

function apagarTarefa(e){
    // Se o elemento pai for o elemento <a>, apaga o elemento <li>, ou seja, a tarefa    
    if(e.target.parentElement.classList.contains("apaga-tarefa")){
        e.target.parentElement.parentElement.remove();
    }
}

function adicionarTarefa(e){
    e.preventDefault();

    // Verifica se usuário digitou algo
    if(entradaTarefa.value === "" || !entradaTarefa){
        alert("Digite uma tarefa!");
        return;
    }

    // Cria <li> com a nova tarefa
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(entradaTarefa.value));

    // Cria a onde vai ficar o botão de apagar para a tarefa
    const a = document.createElement("a");
    a.className = "apaga-tarefa secondary-content";

    // Cria ícone com "X" para apagar a tarefa
    const i = document.createElement("i");
    i.className = "fa fa-remove";

    // Monta o elemento <li>
    a.appendChild(i);
    li.appendChild(a);

    // Adicionando o <li> na <ul>
    listaDeTarefas.appendChild(li);

    // Apaga os dados digitados no input
    entradaTarefa.value = "";
}

function limparTarefas(e) {
    e.preventDefault();

    // Transforma os itens da lista <li> em um array
    let arrayTarefas = Array.from(listaDeTarefas.children);
    
    // Remove cada um dos elementos
    arrayTarefas.forEach(element => {
        element.remove();
    });
}

function filtrar(e) {
    e.preventDefault();

    // Transforma os itens da lista <li> em um array
    let arrayTarefas = Array.from(listaDeTarefas.children);

    arrayTarefas.forEach(itemDaLista => {
        // Caso o valor que foi digitado não esteja contido no valor da tarefa, ele retira a visibilidade do itemDaListao, senão, exibe-o
        if(!itemDaLista.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            itemDaLista.style.display = "none";
        } else{
            itemDaLista.style.display = "block";
        }
    });
}

carregaMonitoresDeEventos();