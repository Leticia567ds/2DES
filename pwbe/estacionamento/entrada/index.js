var uri = `http://localhost:5000/estacionamento/entrada`;
var entrada = [];
const allCl = document.querySelector("#tabela");
const shortDate = new Date("2015-03-25");
const shortFunciona = new Date ("02/24/2022");

function loadCli() {
    fetch(uri)
        .then(res => { return res.json() })
        .then(data => {
            entrada = data;
            preencheTabela();
        });
}

function preencheTabela() {
    var novaData = new Date();
    let indice = 0;
    entrada.forEach(e => {
        let linha = document.createElement("tr");
        let Id = document.createElement("td");
        let Id_cliente = document.createElement("td");
        let id_veículo = document.createElement("td");
        let data2 = document.createElement("td");
        let hr_entrada = document.createElement("td");
        let hr_saida = document.createElement("td");
        let valor = document.createElement("td");
        Id.innerHTML = e.id;
        Id_cliente.innerHTML = e.id_cliente;
        id_veículo.innerHTML = e.id_veiculo;
        data2.innerHTML = e.data.split('-').reverse().join('/');;
        hr_entrada.innerHTML = e.hora_entrada;
        hr_saida.innerHTML = e.hora_saida;
        valor.innerHTML =e.valor;
        linha.appendChild(Id);
        linha.appendChild(Id_cliente);
        linha.appendChild(id_veículo);
        linha.appendChild(data2);
        linha.appendChild(hr_entrada);
        linha.appendChild(hr_saida);
        linha.appendChild(valor);
        allCl.appendChild(linha);
        indice++;
    });
}
