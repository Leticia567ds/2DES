const container = document.querySelector(".container")
nav = container.querySelector(".nav")
toggle = container.querySelector(".toggle")
sub_menu = container.querySelector(".sub-menu")

dropdow = container.querySelector(".dropdow")

var dadosU = []
var dadosP = []
var dadosJ = []
const uriPosts = 'http://localhost:3000/posts/read'
const uriCom = 'http://localhost:3000/comments/vw_com'
const uriLike = 'http://localhost:3000/curtidas/create'
const uriDislike = 'http://localhost:3000/curtidas/del'
const uriComPost = 'http://localhost:3000/comments/create'
const uriSubCom = 'http://localhost/subcomm/vw_c'

toggle.addEventListener("click", () => {
    nav.classList.toggle("close")
})

dropdow.addEventListener("click", () => {
    sub_menu.classList.toggle("modelnav")
})

function carregarPost() {
    const options = { method: 'GET' };
    fetch(uriPosts, options)
        .then(resp => resp.json())
        .then(data => {

            dadosU = data
            // alert("dadosU");
            montarPosts()

        })
        .catch(err => alert("Erro ao carregar dados do BD:" + err));
}
function carregarCom() {

    let form = {
        "id_post": 1
    }

    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(form)
    }
    fetch(uriCom, options)
        .then(resp => { return resp.json() })
        .then(data => {
            dadosP = data
            montaCom()
        })
}

function montarPosts() {
    dadosU.forEach(e => {
        console.log(e)
        let modelClone = document.querySelector('.oi').cloneNode(true)

        modelClone.classList.remove('modelcard');
        if (e.content_image != null) {
            modelClone.querySelector('.postImage').src = montaImg(e.content_image)
        }
        modelClone.querySelector('#dataPost').innerHTML = e.data.split("T")[0]
        modelClone.querySelector('.categoria').innerHTML = e.categoria
        modelClone.querySelector('.textoPost').innerHTML = e.conteudo
        modelClone.querySelector('.idEscondido').innerHTML = e.id_user
        modelClone.querySelector('.idEscondidoPost').innerHTML = e.id_post
        modelClone.querySelector('.userNome').innerHTML = e.nome

        document.querySelector('.card').appendChild(modelClone)
    })

}

function montaCom() {
    dadosP.forEach(e => {
        let modelClone = document.querySelector('.comentarios').cloneNode(true)
        modelClone.classList.remove('modelCom')

        if (e.foto != null) {
            modelClone.querySelector('.imgUserCom').src = montaImg(e.foto)
        }
        modelClone.querySelector('.textoCom').innerHTML = e.texto
        modelClone.querySelector('.nomeUserCom').innerHTML = e.nome

        document.querySelector('.modal_body').appendChild(modelClone)
    })
}

function montasubCom() {
    dadosP.forEach(e => {

        let modelClone = document.querySelector('.sb_menu').cloneNode(true)
        modelClone.classList.remove('modelbtmenu')

        if (e.foto != null) {
            modelClone.querySelector('.imgUser').src = montaImg(e.foto)
        }
        modelClone.querySelector('.say').innerHTML = e.texto
        modelClone.querySelector('.nomeUser').innerHTML = e.nome

        document.querySelector('.sb_menu').appendChild(modelClone)
    })
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}

// function montaComentario() {
//     dadosU.forEach(e => {
//         let modelClone = document.querySelector('.comentarios').cloneNode(true)
//         modelClone.classList.remove('modelCom')

//         modelClone.querySelector()

//         document.querySelector('.modal_body').appendChild(modelClone)
//     })
// }

// function likeButton(){
//     let heart = document.querySelector(".hear");
//     let likes = document.querySelector(".likes");
//     if(heart.src.match("abre.png") ){
//         heart.src = "./img/imagem de post/heart.png";
//         likes.innerHTML = "3,701 likes";
//     }
//     else{
//         heart.src = "./img/imagem de post/abre.png";
//         likes.innerHTML = "3,700 likes";
//     }

// }

const like = () => {

    const likeImg = document.querySelector('.hear')

    if (likeImg.src.split('/')[7] == 'abre.png') {
        likeImg.src = '../img/imagem de post/heart.png'

        let form = {
            'id_user': 2,
            'id_post': 1
        }

        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(form)
        }
        fetch(uriLike, options)
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
            })
    } else {
        likeImg.src = '../img/imagem de post/abre.png'
        console.log(likeImg);
        let form = {
            'id_user': 2,
            'id_post': 1,
        }

        var options = {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(form)
        }
        fetch(uriDislike, options)
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
            })
    }

}

const abrirModal = () => {
    document.querySelector('.modal').classList.remove('modelModal')
}
const fecharModal = () => {
    document.querySelector('.modal').classList.add('modelModal')
}

function enviarCom() {

    let inp = document.getElementById('inpCom').value

    let form = {
        "id_post": 1,
        "id_user": 1,
        "texto": inp
    }

    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(form)
    }
    fetch(uriComPost, options)
        .then(resp => { return resp.json() })
        .then(data => {
            inp.innerHTML = ''
        })
}

carregarPost()
carregarCom()

console.log(document.querySelector('.oi').cloneNode(true));