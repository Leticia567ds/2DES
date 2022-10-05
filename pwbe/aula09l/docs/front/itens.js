const modal = document.querySelector(".modal");
var ni = document.querySelector('#descricao')
var deno = document.querySelector('#valor')
var valo = document.querySelector('#tipo')
var editar = document.querySelector('.editar')

const uri = 'http://localhost:4000/Patrimonio/itens/';
const corpo = document.querySelector("#corpo");
var itens = [];

const carregar = () => {
    const options = { method: 'GET' };
    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            itens = res;
            preencherTela();
        })
        .catch(err => console.error(err));
}


const preencherTela = () => {
    itens.forEach(e => {
        let card = document.querySelector(".card").cloneNode(true);
        card.classList.remove('model');
        card.querySelector("#ni").innerHTML += e.ni;
        card.querySelector("#aquisicao").innerHTML += e.aquisicao;
        card.querySelector("#denominacao").innerHTML += e.denominacao;
        card.querySelector("#valor").innerHTML += e.valor;
        card.querySelector("#img").src = '../assets/' + e.img;
        card.querySelector('#del').setAttribute('onclick', `del(${e.ni})`)
        corpo.appendChild(card);
    });

}
function abrirModalCadastro() {
    btCadedit.onclick = () => { cadastrar(); }
    ni.value = "";
    deno.value = "";
    valo.value = "";
    editar.classList.remove("model");
  }
  function fecharModalCadastro(){
    editar.classList.add('model')
  }

const del = (ni) => {
    const options = {
        method: 'DELETE'
    };
    if (confirm("Confirma a exclusão do item " + ni)) {
        fetch(ur + ni, options)
            .then(res => res.status)
            .then(res => {
                if (res == 204)
                    window.location.reload();
            })
            .catch(err => console.error(err));
    }
}