var uriClientes = `http://localhost:5000/estacionamento/clientes`;
var clientes = [];
var nom = document.querySelector('#nome')
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
    btCadedit.onclick = () => { cadastrar(); }
    nom.value = "";
    end.value = "";
    tel.value = "";
    editar.classList.remove("model");
  }
  function fecharModalCadastro(){
    editar.classList.add('model')
  }
  function cadastrar(){ 
    let lanc = {
        "nome":nom.value,
        "endereco":end.value,
        "telefone":tel.value
  }
   fetch(uriClientes, {
      "method":"POST",
      "headers": {
          "Content-Type": "application/json"
      },
      "body": JSON.stringify(lanc)
  })
  .then(res => {return res.json()})
  .then(resp => {
      if(resp.id !== undefined){
          alert("Lancamentos Cadastrado Com Sucesso !");
          window.location.reload();
      }else {
          alert("Falha ao cadastrar Lancamentos");
      }
   })
  }



