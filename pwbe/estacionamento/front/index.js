var uriClientes = `http://localhost:5000/estacionamento/clientes`;
var clientes = [];
// var nome = document.querySelector('#nome')
var end = document.querySelector('#endereco')
var tel = document.querySelector('#telefone')

const btCadedit = document.querySelector("#cadastro");
var editar = document.querySelector('.editar')

function loadCli() {
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
        let linha = document.createElement("tr");
        let Id = document.createElement("td");
        let Nome = document.createElement("td");
        let Endereco = document.createElement("td");
        let Telefone = document.createElement("td");
        Id.innerHTML = e.id;
        Nome.innerHTML = e.nome_cliente;
        Endereco.innerHTML = e.endereco;
        Telefone.innerHTML = e.telefone;
        linha.appendChild(Id);
        linha.appendChild(Nome);
        linha.appendChild(Endereco);
        linha.appendChild(Telefone);
        allCli.appendChild(linha);
        indice++;
    });
}

function abrirModalCadastro() {
  
    btCadedit.onclick = () => { cadastrar()}
    document.querySelector("#nome").value= "";
    document.querySelector("#endereco").value="";
    document.querySelector("#telefone").value= "";
    editar.classList.remove("model");
  }

  function fecharModalCadastro(){
    editar.classList.add('model')
  }

  function cadastrar(){ 
    console.log("a");
    let corpo = {
        "nome_cliente": document.querySelector("#nome").value,
        "endereco": document.querySelector("#endereco").value,
        "telefone": document.querySelector("#telefone").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    
    options.body = JSON.stringify(corpo);
    //Faz efetivamente a requisição ao back-end
    if (corpo.nome_cliente.length > 0 && corpo.endereco.length > 0 && corpo.telefone.length > 0) {
        fetch(uriClientes, options)
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