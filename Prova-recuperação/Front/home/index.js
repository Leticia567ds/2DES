
var salgados = `http://10.87.207.2:3000/salgados`;
var sal = [];
var cad = document.querySelector('.cad')
var cadA = document.querySelector('.cadastrarA')

function loadCli() {
    fetch(salgados)
        .then(res => { return res.json() })
        .then(data => {
            sal = data;
            preencheTabela();
        });
}


function preencheTabela() {
    let indice = 0;
    sal.forEach(e => {
        let linha = document.createElement("tr");
        let img = document.createElement("td");
        let Nome = document.createElement("td");
        let Descricao = document.createElement("td");
        img.src = '../../assets/' + e.foto;
        Nome.innerHTML = e.nome;
        Descricao.innerHTML = e.descricao;
        linha.appendChild(img);
        linha.appendChild(Nome);
        linha.appendChild(Descricao);
        allCli.appendChild(linha);
        indice++;
    });
}


function cadastrarProduto() {
    cad.classList.remove('model')
    cadA.classList.remove('model')

    document.querySelector('#confirm').addEventListener('click', () => {

        var ini = document.querySelector('#Ini')
        var aqu = document.querySelector('#Iaqu')
        var den = document.querySelector('#Ideno')
        var valor = document.querySelector('#Ival')
        var img = document.querySelector('#Iim')



        let prod = {
            "ni": ini.value,
            "aquisicao": aqu.value,
            "denominacao": den.value,
            "valor": valor.value,
            "img": img.value
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(prod)

        fetch('http://10.87.207.2:3000/salgado', options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert('Prodtuo cadastrado com sucesso !')
                    window.location.reload()

                } else {
                    alert("Item já está cadastrado.");
                }
            })
            .catch(err => console.error(err));

    });

}