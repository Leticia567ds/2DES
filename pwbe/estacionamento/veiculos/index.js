var veiculo = `http://localhost:5000/estacionamento/veiculos`;
var veiculos= [];



function loaadCli(){
    fetch(veiculo)
    .then(res => { return res.json() })
    .then(data => {
        veiculos = data;
        preencherTabela()
    });
}

function preencherTabela(){
    console.log("oi");
   let indice = 0;
   veiculos.forEach(v =>{
    let linha = document.createElement("tr");
    let Id = document.createElement("td");
    let placa = document.createElement("td");
    let tipo = document.createElement("td");
    Id.innerHTML = v.id;
    placa.innerHTML = v.placa;
    tipo.innerHTML = v.tipo;
    linha.appendChild(Id);
    linha.appendChild(placa);
    linha.appendChild(tipo);
    lista_veiculos.appendChild(linha);
    indice++;
   });

}