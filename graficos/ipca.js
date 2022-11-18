document.querySelector('button').addEventListener('click', mostraIpca);

function mostraIpca(evento){
    evento.preventDefault();

    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101';

    fetch(url).then(function(retorno){

        return retorno.text();

    }).then(function(stringJson){

        const indices = JSON.parse(stringJson);

        //////  Fazer em casa! //////
        //colocar os dados recuperados da API 
        //no gráfico

        jsonParaMorris = {
                            element: 'ipca',
                                // Dados do gráfico
                            data: [
                                { year: '2008', value: 20 },
                                { year: '2009', value: 10 },
                                { year: '2010', value: 5 },
                                { year: '2011', value: 5 },
                                { year: '2012', value: 20 },
                                { year: '2013', value: 25 },
                                { year: '2014', value: 7 }
                            ],
                        
                            // O nome do eixo com os valores de X
                            xkey: 'year',
                            
                            // Uma lista de nomes dos atributos de dados contidos em Y
                            ykeys: ['value'],
                        
                            // Rótulos para os índices -- aparece quando passa o mouse por cima
                            labels: ['Value']
                        };

        new Morris.Line(jsonParaMorris);

    }).catch(function(){

        alert('API do Banco Central fora do ar');
    });
}