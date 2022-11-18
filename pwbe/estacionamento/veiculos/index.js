var veiculo = `http://localhost:5000/estacionamento/veiculos`;
var veiculos= [];

const btCadedit = document.querySelector("#cadastro");
var editar = document.querySelector('.editar')

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

function abrirModalCadastro() {
  
    btCadedit.onclick = () => { cadastrar()}
    document.querySelector("#placa").value= "";
    document.querySelector("#tipo").value="";
    editar.classList.remove("model");
  }

  function fecharModalCadastro(){
    editar.classList.add('model')
  }

  function cadastrar(){ 
    console.log("a");
    let corpo = {
        "placa": document.querySelector("#placa").value,
        "tipo": document.querySelector("#tipo").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    
    options.body = JSON.stringify(corpo);
    //Faz efetivamente a requisição ao back-end
    if (corpo.placa.length > 0 && corpo.tipo.length > 0) {
        fetch(veiculo, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    console.log(corpo);
                    window.location.reload();
                } else {
                    alert('Erro ao enviar dados ao Banco de dados:' + resp);
                    window.location.reload();
                }
            })
            .catch(err => alerta(err));
    } else {
        alert('Preencha os campos obrigatórios');
    }
}