const container = document.querySelector(".container")
nav = container.querySelector(".nav")
toggle = container.querySelector(".toggle")
sub_menu = container.querySelector(".sub-menu")
dropdow = container.querySelector(".dropdow")
const likeImg = document.querySelector(".heart");


var dadosU = []
const uriPosts = 'http://localhost:3000/posts/read'
const uriLike = 'http://localhost:3000/curtidas/create'
const uriDislike = 'http://localhost:3000/curtidas/del'



function carregar() {
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

function montarPosts() {
    dadosU.forEach(e => {
        let modelClone = document.querySelector('.oi').cloneNode(true)
       
        modelClone.classList.remove('modelcard');
        if (e.content_image != null) {
            modelClone.querySelector('.perfil').src = e.content_image
        }
        modelClone.querySelector('#dataPost').innerHTML = e.data.split("T")[0]
        modelClone.querySelector('.categoria').innerHTML = e.categoria
        modelClone.querySelector('.textoPost').innerHTML = e.conteudo

        document.querySelector('.card').appendChild(modelClone)
    })

}



// toggle.addEventListener("click",() =>{
//     nav.classList.toggle("close")
// })

// dropdow.addEventListener("click",() =>{
//     sub_menu.classList.toggle("modelnav")
// })

// function likeButton(){
//     let heart = document.querySelector(".heart");
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
    if (likeImg.src.split('/')[5] == 'abre.png') {
        likeImg.src = './img/imagem de post/heart.png'

        let form = {
            'id_user': 1,
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
        likeImg.src = './img/imagem de post/abre.png'

        let form = {
            'id_user': 1
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