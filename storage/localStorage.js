//Como trabalhar com LOCAL STORAGE

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada = document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';

    //após obtermos o dado do usuário
    //vamos guardá-lo no local storage
    localStorage.setItem('dadoDoUsuario', valor);
}

//Para recuperar o dado de local storage
//usamo o localStorage.getItem()
document.querySelector('#mostrar').innerText =
    localStorage.getItem('dadoDoUsuario');

//E para apagar no local storage?
//removeItem()
//localStorage.removeItem('dadoDoUsuario');    