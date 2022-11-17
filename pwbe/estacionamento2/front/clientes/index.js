var Clientes =  `http://localhost:5000/estacionamento/clientes/view`

var cli = [];
var editar = document.querySelector('.editar')
const btCadedit = document.querySelector("#cadastro");

function lendo() {

    var tabela = document.querySelector('.veiculos');
    tabela.classList.remove('model')

    fetch(Clientes)
        .then(res => { return res.json() })
        .then((patrimonio) => {
            patrimonio.forEach((pat) => {
                var corpo = document.querySelector('.corpinho').cloneNode(true);
                corpo.classList.remove('model')

                corpo.querySelector('#a').innerHTML = pat.nome_cliente;
                corpo.querySelector('#b').innerHTML = pat.endereco;
                corpo.querySelector('#c').innerHTML = pat.telefone;
                corpo.querySelector('#d').innerHTML = pat.placa;
                corpo.querySelector('#e').innerHTML = pat.tipo;
                document.querySelector('tbody').appendChild(corpo);

            })
        })
}

function abrirModalCadastro() {
  
    btCadedit.onclick = () => {cadastrar()}
    document.querySelector("#nome").value= "";
    document.querySelector("#valor").value="";
    editar.classList.remove("model");
  }
  function fecharModalCadastro(){
    editar.classList.add('model')
  }
  
  function cadastrar(){ 
    
    let corpo = {
        "nome_cliente": document.querySelector("#nome").value,
        "valor": document.querySelector("#valor").value,
    }
    const options = {
        "method": 'POST',
        "headers": {"Content-Type": 'application/json' }
    };
       options.body = JSON.stringify(corpo);
   
    //Faz efetivamente a requisição ao back-end

    if (corpo.nome_cliente != 0 || corpo.valor != 0)  {
        fetch(entrada, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    window.location.href = '../Entrada/index.html';
                } else {
                    alert('Erro no cadastramento:' + resp);
                    window.location.reload();
                }
            })
            .catch(err => alert(err));
    } else {
        alert('Preencha os campos obrigatórios');
    }
}

