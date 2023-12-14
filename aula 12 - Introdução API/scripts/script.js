//API - aplication programming interface
//fetch = busca a plicação
//json = maneira de transmitir dados do lado servidor para o lado cliente
//then = acessamos outro escopo da aplicação (pegou apr.então ......)

var btnCep =document.querySelector("#btnCep");

btnCep.addEventListener("click", consultar);

function consultar(){
    var cep = document.querySelector("#cep").value;

        if(cep.length < 8 || cep.length > 9 || cep === isNaN){
            alert("Erro! CEP inválido");

        }else{
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res=> {
                return res.json();
        }).then (dados => {
            let resposta = document.querySelector("#resposta");
                resposta.innerHTML += `
                    <h1>Informações sobre o CEP</h1>
                    CEP: ${dados.cep}<br>
                    BAIRRO: ${dados.bairro}<br>
                    LOGRADOURO: ${dados.logradouro}<br>`;
        

        console.log(API);
        });
    }
    

   

//console.log(API);
}

