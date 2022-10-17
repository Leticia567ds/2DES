

function loadDep() {
    fetch(uriClientes)
        .then(res => { return res.json() })
        .then(data => {
            clientes = data;
            preencheTabela();
        });
}


function preencheTabela() {
    let indice = 0;
    clientes.forEach(e => {
        let linha = document.createElement("tr")
        let cod = document.createElement("td");
        let depto = document.createElement("td");
        cod.innerHTML = e.Cod_Depto;
        depto.innerHTML = e.Nome_Depto;
        linha.appendChild(cod);
        linha.appendChild(depto);
        allCli.appendChild(linha);
        indice++;
    });
}