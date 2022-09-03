let peso = parseFloat(prompt("Qual é o seu peso?"));
let altura = parseFloat(prompt("Qual é a sua altura?"));

alert(calcularImc(peso, altura));

function calcularImc(peso, altura){
    let imc = peso / (altura ^ 2);
    let resp = "";

    if(imc > 25){
        resp = "Acima do peso.";
    } else if(imc >= 18.5 && imc <= 25){
        resp = "Peso ideal.";
    } else{
        resp = "Abaixo do peso.";
    }

    resp = "IMC: "+ imc + " - " + resp

    return resp;
}