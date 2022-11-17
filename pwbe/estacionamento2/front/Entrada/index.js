var entrada =  `http://localhost:5000/estacionamento/entrada/v`

function lendo() {

    var tabela = document.querySelector('.entradas');
    tabela.classList.remove('model')

    fetch(entrada)
        .then(res => { return res.json() })
        .then((patrimonio) => {
            patrimonio.forEach((pate) => {
                var corpo = document.querySelector('.corpinho').cloneNode(true);
                corpo.classList.remove('model')

              
                corpo.querySelector('#a').innerHTML = pate.nome_cliente;
                var data = pate.hora_entrada;
                corpo.querySelector('#b').innerHTML = data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0];
                corpo.querySelector('#c').innerHTML = pate.hora_saida;
                corpo.querySelector('#d').innerHTML = pate.valor.toLocaleString('pt-BR', {style : 'currency', currency: 'BRL'});
                document.querySelector('tbody').appendChild(corpo);

            })
        })
}



