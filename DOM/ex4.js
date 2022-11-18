//Selecionando múltiplos elementos

let e;

//Com getElementsByClassName
e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){

    val.style.color = 'green';

    //val.innerText = 'Outra tarefa';

    console.log(val.innerText);
});

//Com querySelectorAll
e = document.querySelectorAll('li');

e.forEach(function(val){

    console.log(val.innerText);
});

//Somente ímpares (para pares, even)
e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.background = '#dedede';
});

//Sem usar função anônima
e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){

    console.log(val);
}

e = document.querySelector('ul.collection');

//console.log(e.firstChild);
//console.log(e.childElementCount);
console.log(e.children[3].children[0]);