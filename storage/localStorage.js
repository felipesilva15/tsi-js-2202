document.getElementById("botao").addEventListener("click", (e) => {
    e.preventDefault();

    let input = document.getElementById("entrada");
    let saida = document.getElementById("mostrar");

    // Pegamos os dados obtidos no formulário e guardamos no localStorage
    localStorage.setItem("nomeUsuario", input.value);

    saida.innerText = input.value;
    input.value = "";
})

// Coloca o dado do localStorage no span ao recarregar a página
document.getElementById("mostrar").innerText = localStorage.getItem("nomeUsuario");

// Apaga o dado do localStorage
// localStorage.removeItem("nomeUsuario");

let vetor = ["pera", "banana", "maçã"];

// Para guardar algo que não seja string no localStorage ou sessionStorage, temos que converter para string. 
// Com o método JSON.stringfy, transformamos vetores e objetos em string.
sessionStorage.setItem("frutas", JSON.stringify(vetor));

let retornoFruta = JSON.parse(sessionStorage.getItem("frutas"));
retornoFruta.push("morango");
retornoFruta.push("abacate");
retornoFruta[0] = "manga";

sessionStorage.setItem("frutas", JSON.stringify(retornoFruta));