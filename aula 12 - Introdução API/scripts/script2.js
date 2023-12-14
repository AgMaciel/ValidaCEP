function consultar() {
    var cep = document.querySelector("#cep").value;

    if (cep.length < 8 || cep.length > 9 || isNaN(cep)) {
        alert("Erro! CEP inválido");
    } else {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(dados => {
                // Preencher os campos com as informações do CEP
                document.querySelector("#logradouro").value = dados.logradouro;
                document.querySelector("#bairro").value = dados.bairro;
                document.querySelector("#siafi").value = dados.siafi;
                document.querySelector("#uf").value = dados.uf;
                document.querySelector("#complemento").value = dados.complemento;
                document.querySelector("#ddd").value = dados.ddd;
            })
            .catch(error => {
                alert("Erro ao consultar o CEP. Verifique se o CEP é válido.");
            });
    }
}