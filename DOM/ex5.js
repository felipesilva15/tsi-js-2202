//Como criar elementos

//Cria o elemento li
let novoItemNaLista = document.createElement('li');

//Define o id do novo elemento
novoItemNaLista.id = 'novo-item';

//Define a classe CSS do novo elemento
novoItemNaLista.className = 'collection-item';

//Adiciona um atributo
novoItemNaLista.setAttribute('title', 'Novo item na lista');

//Adiciona um node filho
novoItemNaLista.appendChild(
    document.createTextNode('Fazer exercício físico'));

//Criar sub elemento <a>
let elementoAncora = document.createElement('a');

elementoAncora.className = 'delete-item secondary-content';

elementoAncora.setAttribute('href', '#');

//Criar sub elemento <i>
let elementoIcone = document.createElement('i');

elementoIcone.className = 'fa fa-remove';

//Adiciona o <i> em <a>
elementoAncora.appendChild(elementoIcone);

//Adiciona o <a> em <li>
novoItemNaLista.appendChild(elementoAncora);

//Como capturar o <ul> com querySelector
//let elementoUele = document.querySelector('ul.collection');
//elementoUele.appendChild(novoItemNaLista);

//Como capturar o <ul> pela classe
let elementoUele = document.getElementsByClassName('collection');
elementoUele[0].appendChild(novoItemNaLista);
