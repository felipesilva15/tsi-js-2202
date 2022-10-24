function request(method, url, data) {
    const promisse = new Promise((resolve, reject) => {
        // Instancia objeto XMLHttoRequest
        let request = new XMLHttpRequest();

        // Abre a requisição e define o tipo de retorno como json
        request.open(method, url);
        request.responseType = "json";

        // Caso a requisição tenha que enviar um body, define o cabeçalho de content-type
        if(data){
            request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        }
        
        // Quando carregar, executa uma função 
        request.onload = () => {
            // Caso o stauts seja maior ou igual à 400, acusa como erro, senão, retorna os dados obtidos
            if(request.status >= 400){
                reject({message: "Erro ao consumir a API."});
            } else{
                resolve(request.response);
            }
        }

        // Caso ocorra um rerro na requisição, acusa como erro 
        request.onerror = () => {
            reject({message: "Erro ao consumir a API."})
        }

        // Envia os dados do body em JSON
        request.send(JSON.stringify(data));
    });

    return promisse;
}

function preverIdade() {
    // Pega os dados digitados pelo usuário
    let name = document.getElementById("name").value;

    if(!name){
        return;
    }

    // Monta a url
    let urlBase = "https://api.agify.io";
    let params = `?name=${name}`;
    let url = urlBase + params;

    // Realiza a requisição
    let res = request("GET", url)

    // Pega o elemento que será exibido o restorno
    let responseElement = document.getElementById("response");

    res
        .then((response) =>{
            // Caso dê ceerto, exibe a idade
            responseElement.innerHTML = `Idade: ${response.age}`;
        })
        .catch((err) =>{
            // Caso dê erro, exibe a mensagem de erro
            responseElement.innerHTML = err.message;
        });
}

// Ao clicar no botão de prever idade, realiza a requisição
document.getElementById("send").addEventListener("click", function(e){
    e.preventDefault();

    preverIdade();
})