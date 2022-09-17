btnCalcular = document.getElementById("calcular")

btnCalcular.addEventListener('click', function (e){
    e.preventDefault();

    let servico = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let resultado = document.getElementById('resultado');

    let preco = calcularPreco(servico.value, prazo.value);

    resultado.innerText = `O preço é ${preco}`
})

function calcularPreco(serv, prazo){
    let tabela =[
        ["$$$", "$$", "$"],
        ["$$$$", "$$$", "$$"],
        ["Não faz", "Não faz", "$$$"]
    ];

    return(tabela[serv][prazo]);
}