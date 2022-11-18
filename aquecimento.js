//Relembrando questões básicas do JS

//////////
//Loopings

//for

for( let i = 0 ; i < 10 ; i++ ){

    console.log('Número da linha: ' + i);
}

//while

i = 0;
while( i < 10 ){

    console.log('Número da linha com while: ' + i);
    i++;
}

//do

i = 20;
do{
    console.log('Número da linha com do: ' + i);
    i++;
}while( i < 10 );

//////////////
//Condicionais 

//if
let a = 5;
let b = 5;
if(a < b){
    console.log( a + ' é menor que ' + b);
}else if(a == b){
    console.log( a + ' é igual a ' + b);
}else{
    console.log( a + ' não é menor que ' + b);
}

//switch
let diaSemana = 2;

switch(diaSemana){

    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercules');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
    default:
        console.log('Número inválido!');
}

//Ternário

let x = 4;
let y = 2;

let resultado = x > y ? 'x é maior' : 'não é maior';

console.log(resultado);

//let genero = prompt('Entre com M ou F');
let genero = 'F';

let saida = genero == 'M' ? 'Masculino' : 'Feminino';

console.log(saida);

//Coalescente
let coisa;
let variavel = coisa ?? 'Não há';
console.log(variavel);

