var carrinho = 
[
    { 
        "img": "https://ae01.alicdn.com/kf/HTB13IDMKh1YBuNjy1zcq6zNcXXaY/Shorts-dos-homens-bermuda-2018-ver-o-praia-shorts-homem-pumba-carta-impress-o-masculina-marca.jpg_Q90.jpg_.webp",
        "nome":"Alessandra",
        "produto":"Short",
        "qtd": 5
    },
    { 
        "img":"https://img.ifunny.co/images/53e408fa3628e6509c9f51de01fa11c16f43f4167b7beece03b6bf35eea9206f_1.jpg",
        "nome":"João",
        "produto":"Chinelo",
        "qtd": 2
    },
    { 
        "img":"https://ae01.alicdn.com/kf/HTB13IDMKh1YBuNjy1zcq6zNcXXaY/Shorts-dos-homens-bermuda-2018-ver-o-praia-shorts-homem-pumba-carta-impress-o-masculina-marca.jpg_Q90.jpg_.webp",
        "nome":"Bernado",
        "produto":"Blusa",
        "qtd": 3
    },
];

var itemCarrinho = document.querySelector(".item-carinho");

function carregar(){

carrinho.forEach(item => {

    let novoItem = itemCarrinho.cloneNode(true);


    novoItem.classList.remove("modelo");


        novoItem.querySelector("#img-item").src = item.img

        novoItem.querySelector("#nome-item").innerHTML = item.nome

        novoItem.querySelector("#qtd-item").value = item.qtd



        document.querySelector(".carrinho").appendChild(novoItem)

    })

}

function removerItem(e){

    e.parentNode.remove()

}