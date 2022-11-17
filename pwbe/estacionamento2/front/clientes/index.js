var Clientes =  `http://localhost:5000/estacionamento/clientes/view`
var cli = [];

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


