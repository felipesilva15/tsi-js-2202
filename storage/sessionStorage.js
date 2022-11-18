//Como trabalhar com SESSION STORAGE

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
    sessionStorage.setItem('dadoDoUsuario', valor);
}

//Para recuperar o dado de local storage
//usamo o sessionStorage.getItem()
document.querySelector('#mostrar').innerText =
    sessionStorage.getItem('dadoDoUsuario');

//E para apagar no session storage?
//removeItem()
//sessionStorage.removeItem('dadoDoUsuario');   

let vetor = ['pera','banana','manga'];

//Para gardar algo que não seja uma string
//no localStorage ou sessionStorage, temos
//que converter para string. Com o método
//JSON.stringify() transformamos vetores
//e objetos em string
sessionStorage.setItem( 'frutas', 
                        JSON.stringify(vetor));

//Para recuperar uma string JSON do localStorage
//ou sessionStorage e transformar em um objeto
//ou vetor novamente, use JSON.parse()
let recupDado = JSON.parse(
                    sessionStorage.
                        getItem('frutas'));

//Alterações no vetor recuperado 
//do sessionStorage
recupDado[3] = 'morango';
recupDado[1] = 'parchita';

//console.log(recupDado);

//Transforma o vetor em string para poder
//gravar em sessionStorage ou localStorage
let strRecupDados = JSON.stringify(recupDado);

//console.log(strRecupDados);

//Atualiza o item frutas no sessionStorage
sessionStorage.setItem('frutas', strRecupDados );

