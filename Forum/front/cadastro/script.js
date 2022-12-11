var inpSenha = document.querySelector('#inpSenha')
var inpEmail = document.querySelector('#inpEmail')
var inpFile = document.querySelector('#inputTag')

const text = (file) => {
    let text = document.querySelector('#imageName')

    text.innerText = file.split("\\")[2]

}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}

