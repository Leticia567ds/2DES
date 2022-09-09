fetch("http://localhost:2000/usuarios")
.then(res => { return res.json() })
.then(user => {
    user.forEach(user => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = user.cod;
        colunas[1].innerHTML = user.nome;
        colunas[2].innerHTML = user.endereco;
        colunas[3].innerHTML = user.telefones;
    })
})
