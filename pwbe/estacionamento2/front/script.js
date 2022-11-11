var uriClientes = `http://localhost:5000/estacionamento/clientes`;
var clientes = [];
var end = document.querySelector('#endereco')
var tel = document.querySelector('#telefone')
var editar = document.querySelector('.editar')
const btCadedit = document.querySelector("#cadastro");


function abrirModalCadastro() {
  
    btCadedit.onclick = () => { cadastrar()}
    document.querySelector("#nome").value= "";
    document.querySelector("#endereco").value="";
    document.querySelector("#telefone").value= "";
    document.querySelector("#tipo").value= "";
    document.querySelector("#placa").value= "";
    editar.classList.remove("model");
  }
  function fecharModalCadastro(){
    editar.classList.add('model')
  }
  
  function cadastrar(){ 
    let corpo = {
        "nome_cliente": document.querySelector("#nome").value,
        "endereco": document.querySelector("#endereco").value,
        "telefone": document.querySelector("#telefone").value,
        "tipo": document.querySelector("#tipo").value,
        "placa": document.querySelector("#placa").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    
    options.body = JSON.stringify(corpo);
    //Faz efetivamente a requisição ao back-end
    if (corpo.nome_cliente.length > 0 && corpo.endereco.length > 0 && corpo.telefone.length > 0 && corpo.tipo.length > 0 && corpo.placa.length > 0)  {
        fetch(uriClientes, options)
            .then(resp => resp.status)
            .then(resp => {
                console.log("oi")
                if (resp == 201) {
                    window.location.href = 'clientes/index.html';
                } else {
                    alert('Erro no cadastramento:' + resp);
                    window.location.reload();
                }
            })
            .catch(err => alerta(err));
    } else {
        alert('Preencha os campos obrigatórios');
    }
}