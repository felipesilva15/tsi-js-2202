const lista = document.querySelector(".collection");
const btnAddTarefa = document.querySelector("#btnAddTarefa");
const btnLimpar = document.querySelector("#btnLimparTarefas");;
const campoFiltro = document.querySelector("#filtro");;
const campoTarefa = document.querySelector("#tarefa");;

function salvarTarefa(tarefa) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if(!tarefas){
        tarefas = [];
    }

    tarefas.push(tarefa);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregaMonitorDeEventos() {
    btnAddTarefa.addEventListener("click", (e) => {
        e.preventDefault();
    
        if(!campoTarefa.value || campoTarefa.value === ""){
            alert("Insira uma tarefa");
            return;
        }

        let novaTarefa = document.createElement("li");
        novaTarefa.className = "collection-item";
        novaTarefa.appendChild(document.createTextNode(campoTarefa.value));

        // Cria subelemento <a> da tag <li> 
        let link = document.createElement("a");
        link.className = "delete-item secondary-content"

        // Cria subelemento <i> da tag <a> 
        let icone = document.createElement("i");
        icone.className = "fa fa-remove"

        link.appendChild(icone);
        novaTarefa.appendChild(link)
        lista.appendChild(novaTarefa)

        salvarTarefa(campoTarefa.value);

        // Limpa o campo
        campoTarefa.value = "";
    })
}

carregaMonitorDeEventos();