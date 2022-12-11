const container = document.querySelector(".container")
nav = container.querySelector(".nav")
toggle = container.querySelector(".toggle")
sub_menu = container.querySelector(".sub-menu")
dropdow = container.querySelector(".dropdow")


var dadosU = []
const uriPosts = 'http://localhost:3000/posts/read'



function carregar() {
    const options = { method: 'GET' };
    fetch(uriPosts, options)
        .then(resp => resp.json())
        .then(data => {

            dadosU = data
            console.log(dadosU)
             montarPosts();
        })
        .catch(err => alert("Erro ao carregar dados do BD:" + err));
}

function montarPosts() {
    dadosU.forEach(e => {
        let modelClone = document.querySelector('.card').cloneNode(true)
       
        modelClone.classList.remove('model');
        if (e.content_image != null) {
            modelClone.querySelector('.perfil').src = e.content_image
        }
        modelClone.querySelector('#dataPost').innerHTML = e.data.split("T")[0]
        modelClone.querySelector('#categoria').innerHTML = e.categoria
        modelClone.querySelector('.textoPost').innerHTML = e.conteudo

        document.querySelector('.main').appendChild(modelClone)
    })

}

// function montaImg(img) {
//     if (img != null) {
//         return `data:image/png;base64,${img}`;
//     } else
//         return `./default.png`;
// }


toggle.addEventListener("click",() =>{
    nav.classList.toggle("close")
})

dropdow.addEventListener("click",() =>{
    sub_menu.classList.toggle("model")
})

function likeButton(){
    let heart = document.querySelector(".heart");
    let likes = document.querySelector(".likes");
    if(heart.src.match("abre.png") ){
        heart.src = "./img/imagem de post/heart.png";
        likes.innerHTML = "3,701 likes";
    }
    else{
        heart.src = "./img/imagem de post/abre.png";
        likes.innerHTML = "3,700 likes";
    }
    
}