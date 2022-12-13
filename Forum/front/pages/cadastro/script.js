var inpSenha = document.querySelector('#inpSenha')
var inpEmail = document.querySelector('#inpEmail')
var inpFile = document.querySelector('#inputTag')

const text = (file) => {
    let text = document.querySelector('#imageName')

    text.innerText = file.split("\\")[2]
}

function redirectToLogin() {
    window.location.href = '../login/index.html'
}