var Clientes =  `http://localhost:5000/estacionamento/clientes/view`
var cli = [];

function loadCli(){
    fetch(Clientes)
    .then(res => { return res.json()})
    .then(data =>{ 
        cli = data;
        preencherTabela()
    })
}

function preencherTabela(){
    let indice = 0;
    cli.forEach(c =>{
        let linha = document.createElement("tr");
        let nome = document.createElement("td");
        let endereco = document.createElement("td");
        let telefone = document.createElement("td");
        let tipo = document.createElement("td");
        let placa = document.createElement("td");
        let image = document.createElement("img");
        nome.innerHTML = c.nome_cliente;
        endereco.innerHTML = c.endereco;
        telefone.innerHTML = c.telefone;
        tipo.innerHTML = c.tipo;
        placa.innerHTML = c.placa;
        linha.appendChild(nome);
        linha.appendChild(endereco);
        linha.appendChild(telefone);
        linha.appendChild(tipo);
        linha.appendChild(placa);
        registros.appendChild(linha);
        indice++;
    } )
}
function xMultiImage(){
 
}

