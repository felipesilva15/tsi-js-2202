
let nome = "Felipe Silva";
let tabuada = 10;
let i = 0;

// ******** //
// LOOPINGS //
// ******** //

// FOR
console.log("FOR");
for (let i = 0; i < 10; i++) {
    console.log(`Linha ${i}`);
}

// FOR - Montando uma tabuada
// console.log("");
// console.log("Tabuada do " + tabuada);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${tabuada} = ${i * tabuada}`);
// }


// WHILE
console.log("");
console.log("WHILE");
i = 0;
while (i < 10) {
    console.log(`Linha ${i}`);

    i++;
}


// DO WHILE
console.log("");
console.log("DO WHILE");
i = 0;
do{
    console.log(`Linha ${i}`);

    i++;
} while (i < 10)



// ************ //
// CONDICIONAIS //
// ************ //

// IF
console.log("");
console.log("IF");
let a = 5;
let b = 10;
if (a > b){
    console.log(a + " é maior que " + b);
} else if(a < b){
    console.log(b + " é maior que " + a);
} else{
    console.log(b + " é igual a " + a );
}


// SWITCH
console.log("");
console.log("SWITCH");
let dow = 5;
switch (dow) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia da semana inválido!");
        break;
}


// TERNÁRIO
console.log("");
console.log("TERNÁRIO");
let sexo = "F";
let resultado = sexo == "F" ? "feminino" : "masculino";

console.log(`O sexo é ${resultado}`);


// COALESCENTE
console.log("");
console.log("COALESCENTE");
let isNull;
let variante = isNull ?? "vazio";

console.log(variante);