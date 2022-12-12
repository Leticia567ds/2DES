const imgLike = document.querySelector('.likeImage')
var dadosU = []
const uriLike = 'http://localhost:3000/curtidas/create'
const uriDislike = 'http://localhost:3000/curtidas/del'
const uriPosts = 'http://localhost:3000/posts/read'



function carregar() {
    const options = { method: 'GET' };
    fetch(uriPosts, options)
        .then(resp => resp.json())
        .then(data => {

            dadosU = data
            montaPosts()
        })
        .catch(err => alert("Erro ao carregar dados do BD:" + err));
}


function montaPosts() {
    dadosU.forEach(e => {
        let modelClone = document.querySelector('.card').cloneNode(true)
        modelClone.classList.remove('model')
        if (e.conten_image != null) {
            modelClone.querySelector('#imgPost').src = e.content_image
        }
        modelClone.querySelector('#dataPost').innerHTML = e.data.split("T")[0]
        modelClone.querySelector('#categoria').innerHTML = e.categoria
        modelClone.querySelector('#textoPost').innerHTML = e.conteudo

        document.querySelector('#posts').appendChild(modelClone)
    })

}


function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}

const like = () => {
    if (imgLike.src.split('/')[5] == 'likeEmpty.png') {
        imgLike.src = '../assets/likeFill.png'

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
        imgLike.src = '../assets/likeEmpty.png'

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






